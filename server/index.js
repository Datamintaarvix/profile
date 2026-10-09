import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from server directory first, then fallback to project root
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const port = process.env.PORT || 5000;

// Enable trust proxy for accurate client IP behind proxies
app.set('trust proxy', 1);

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// In-Memory Rate Limiter (sliding window: max 5 requests per 10 minutes in production, 50 in dev)
const isDev = process.env.NODE_ENV !== 'production';
const ipRequestHistory = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = isDev ? 50 : 5;

// Clean up old rate limit records periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of ipRequestHistory.entries()) {
    const valid = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      ipRequestHistory.delete(ip);
    } else {
      ipRequestHistory.set(ip, valid);
    }
  }
}, 5 * 60 * 1000);

const checkRateLimit = (ip) => {
  const now = Date.now();
  const timestamps = (ipRequestHistory.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  timestamps.push(now);
  ipRequestHistory.set(ip, timestamps);
  return true;
};

// HTML entity escaping helper to prevent XSS in email clients
const escapeHtml = (unsafe) => {
  if (unsafe === null || unsafe === undefined) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Helper to format date
const formatDate = () => {
  return new Date().toLocaleString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  });
};

// Generate Professional HTML Email Body
const generateEmailHtml = (formType, data, sourcePage, hasAttachment, fileName) => {
  const isCareer = formType.toLowerCase().includes('career');
  const accentColor = '#00E5FF';
  const headerBg = '#0A0F1D';
  const fullName = escapeHtml(data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'N/A');
  const email = escapeHtml(data.email || 'N/A');
  const phone = escapeHtml(data.phone || 'N/A');
  const position = escapeHtml(data.position || data.role || '');
  const experience = escapeHtml(data.experience || '');
  const location = escapeHtml(data.location || '');
  const company = escapeHtml(data.company || '');
  const service = escapeHtml(data.service || '');
  const budget = escapeHtml(data.budget || '');
  const pkg = escapeHtml(data.package || '');
  const linkedin = data.linkedin ? escapeHtml(data.linkedin) : '';
  const portfolio = (data.portfolio || data.portfolioUrl) ? escapeHtml(data.portfolio || data.portfolioUrl) : '';
  const rawMessage = data.message || data.coverLetter || data.projectDetails || '';
  const formattedMessage = escapeHtml(rawMessage).replace(/\n/g, '<br/>');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F1F5F9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #E2E8F0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: ${headerBg}; padding: 32px 36px; border-bottom: 3px solid ${accentColor};">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: ${accentColor}; text-transform: uppercase; margin-bottom: 6px;">
                      DATAMINT AARVIX NOTIFICATION
                    </div>
                    <div style="font-size: 22px; font-weight: 800; color: #FFFFFF; line-height: 1.3;">
                      ${isCareer ? '💼 New Job Application' : '📬 New Contact Enquiry'}
                    </div>
                    <div style="font-size: 13px; color: #94A3B8; margin-top: 8px;">
                      Received on ${formatDate()}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px 36px;">
              
              <!-- Core Information Section -->
              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px;">
                  ${isCareer ? 'Candidate Information' : 'Contact Information'}
                </div>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size: 14px; line-height: 1.6;">
                  <tr>
                    <td width="140" style="color: #64748B; padding: 6px 0; font-weight: 600;">Full Name:</td>
                    <td style="color: #0F172A; padding: 6px 0; font-weight: 700;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748B; padding: 6px 0; font-weight: 600;">Email Address:</td>
                    <td style="padding: 6px 0;">
                      <a href="mailto:${email}" style="color: #0284C7; text-decoration: none; font-weight: 600;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="color: #64748B; padding: 6px 0; font-weight: 600;">Phone Number:</td>
                    <td style="padding: 6px 0;">
                      <a href="tel:${phone}" style="color: #0284C7; text-decoration: none; font-weight: 600;">${phone}</a>
                    </td>
                  </tr>
                  ${company ? `
                  <tr>
                    <td style="color: #64748B; padding: 6px 0; font-weight: 600;">Company:</td>
                    <td style="color: #0F172A; padding: 6px 0;">${company}</td>
                  </tr>` : ''}
                  ${location ? `
                  <tr>
                    <td style="color: #64748B; padding: 6px 0; font-weight: 600;">Location:</td>
                    <td style="color: #0F172A; padding: 6px 0;">${location}</td>
                  </tr>` : ''}
                </table>
              </div>

              <!-- Career / Request Specifics -->
              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px;">
                  ${isCareer ? 'Application Details' : 'Request Details'}
                </div>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size: 14px; line-height: 1.6;">
                  ${position ? `
                  <tr>
                    <td width="140" style="color: #64748B; padding: 6px 0; font-weight: 600;">Position Applied:</td>
                    <td style="color: #0F172A; padding: 6px 0; font-weight: 700;">${position}</td>
                  </tr>` : ''}
                  ${experience ? `
                  <tr>
                    <td style="color: #64748B; padding: 6px 0; font-weight: 600;">Experience Level:</td>
                    <td style="color: #0F172A; padding: 6px 0;">${experience}</td>
                  </tr>` : ''}
                  ${service ? `
                  <tr>
                    <td width="140" style="color: #64748B; padding: 6px 0; font-weight: 600;">Service Required:</td>
                    <td style="color: #0F172A; padding: 6px 0; font-weight: 700;">${service}</td>
                  </tr>` : ''}
                  ${budget ? `
                  <tr>
                    <td style="color: #64748B; padding: 6px 0; font-weight: 600;">Expected Budget:</td>
                    <td style="color: #0F172A; padding: 6px 0;">${budget}</td>
                  </tr>` : ''}
                  ${pkg ? `
                  <tr>
                    <td style="color: #64748B; padding: 6px 0; font-weight: 600;">Package Tier:</td>
                    <td style="color: #0F172A; padding: 6px 0;">${pkg}</td>
                  </tr>` : ''}
                  ${linkedin ? `
                  <tr>
                    <td style="color: #64748B; padding: 6px 0; font-weight: 600;">LinkedIn:</td>
                    <td style="padding: 6px 0;">
                      <a href="${linkedin}" target="_blank" rel="noopener noreferrer" style="color: #0284C7; text-decoration: underline;">${linkedin}</a>
                    </td>
                  </tr>` : ''}
                  ${portfolio ? `
                  <tr>
                    <td style="color: #64748B; padding: 6px 0; font-weight: 600;">Portfolio/GitHub:</td>
                    <td style="padding: 6px 0;">
                      <a href="${portfolio}" target="_blank" rel="noopener noreferrer" style="color: #0284C7; text-decoration: underline;">${portfolio}</a>
                    </td>
                  </tr>` : ''}
                  ${hasAttachment ? `
                  <tr>
                    <td style="color: #64748B; padding: 6px 0; font-weight: 600;">Attachment:</td>
                    <td style="color: #059669; padding: 6px 0; font-weight: 700;">📎 ${escapeHtml(fileName || 'Attached file')}</td>
                  </tr>` : ''}
                </table>
              </div>

              <!-- Message / Details Block -->
              ${formattedMessage ? `
              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px;">
                  ${isCareer ? 'Cover Letter / Message' : 'Message / Details'}
                </div>
                <div style="background-color: #F8FAFC; border-left: 4px solid #00E5FF; padding: 14px 18px; border-radius: 4px 8px 8px 4px; font-size: 14px; color: #334155; line-height: 1.7;">
                  ${formattedMessage}
                </div>
              </div>` : ''}

              <!-- Submission Context -->
              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px dashed #E2E8F0; font-size: 12px; color: #94A3B8;">
                <strong>Source Page:</strong> ${escapeHtml(sourcePage || 'Website')}<br/>
                <strong>Form Type:</strong> ${escapeHtml(formType)}
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F8FAFC; padding: 20px 36px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 12px; color: #94A3B8;">
              <p style="margin: 0 0 6px 0;">
                You can reply directly to this email to contact <strong>${fullName}</strong> at <a href="mailto:${email}" style="color: #0284C7;">${email}</a>.
              </p>
              <p style="margin: 0;">
                &copy; ${new Date().getFullYear()} DATAMINT AARVIX. Automated Web System.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

// Plain text alternative email generator
const generateEmailText = (formType, data, sourcePage, hasAttachment, fileName) => {
  const isCareer = formType.toLowerCase().includes('career');
  const fullName = data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'N/A';
  const email = data.email || 'N/A';
  const phone = data.phone || 'N/A';
  const position = data.position || data.role || '';
  const message = data.message || data.coverLetter || data.projectDetails || '';

  return `
========================================
DATAMINT AARVIX - ${isCareer ? 'NEW CAREER APPLICATION' : 'NEW CONTACT ENQUIRY'}
========================================
Date/Time: ${formatDate()}
Form Type: ${formType}
Source Page: ${sourcePage || 'Website'}

--- ${isCareer ? 'CANDIDATE INFORMATION' : 'CONTACT INFORMATION'} ---
Name: ${fullName}
Email: ${email}
Phone: ${phone}
${data.company ? `Company: ${data.company}\n` : ''}${data.location ? `Location: ${data.location}\n` : ''}
--- ${isCareer ? 'APPLICATION DETAILS' : 'REQUEST DETAILS'} ---
${position ? `Position: ${position}\n` : ''}${data.experience ? `Experience: ${data.experience}\n` : ''}${data.service ? `Service: ${data.service}\n` : ''}${data.budget ? `Budget: ${data.budget}\n` : ''}${data.package ? `Package: ${data.package}\n` : ''}${data.linkedin ? `LinkedIn: ${data.linkedin}\n` : ''}${data.portfolio || data.portfolioUrl ? `Portfolio: ${data.portfolio || data.portfolioUrl}\n` : ''}${hasAttachment ? `Attachment: ${fileName}\n` : ''}
--- MESSAGE / NOTES ---
${message || 'N/A'}

========================================
(Reply directly to this email to reply to the sender)
`.trim();
};

// Dispatch Email via Resend or SMTP
const deliverEmail = async ({ from, to, replyTo, subject, html, text, attachments }) => {
  const resendApiKey = process.env.RESEND_API_KEY;
  const isResendConfigured = resendApiKey && 
    resendApiKey !== 'PASTE_RESEND_API_KEY_HERE' && 
    resendApiKey.startsWith('re_');

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const isSmtpConfigured = Boolean(smtpHost && smtpUser && smtpPass);

  // 1. Try Resend if configured
  if (isResendConfigured) {
    const resend = new Resend(resendApiKey);
    const payload = {
      from,
      to,
      replyTo,
      subject,
      html,
      text,
    };

    if (attachments && attachments.length > 0) {
      payload.attachments = attachments.map(att => ({
        filename: att.filename,
        content: att.content, // Buffer
      }));
    }

    const { data: resendData, error: resendError } = await resend.emails.send(payload);
    if (resendError) {
      console.error('[Resend Error]', resendError);
      throw new Error(resendError.message || 'Resend failed to deliver email.');
    }
    return { provider: 'resend', id: resendData?.id };
  }

  // 2. Try SMTP if configured
  if (isSmtpConfigured) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const info = await transporter.sendMail({
      from,
      to,
      replyTo,
      subject,
      html,
      text,
      attachments: attachments ? attachments.map(att => ({
        filename: att.filename,
        content: att.content,
      })) : [],
    });

    return { provider: 'smtp', id: info.messageId };
  }

  // Neither provider is configured
  const error = new Error('CONFIG_MISSING: Neither RESEND_API_KEY nor SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) are configured.');
  error.code = 'CONFIG_MISSING';
  throw error;
};

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  const resendKey = process.env.RESEND_API_KEY;
  const isResendConfigured = Boolean(resendKey && resendKey.startsWith('re_') && resendKey !== 'PASTE_RESEND_API_KEY_HERE');
  const isSmtpConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
  const recipient = process.env.COMPANY_EMAIL || process.env.ADMIN_EMAIL || 'NOT_CONFIGURED';

  res.status(200).json({
    status: 'ok',
    emailServiceConfigured: isResendConfigured || isSmtpConfigured,
    provider: isResendConfigured ? 'Resend' : isSmtpConfigured ? 'SMTP' : 'None',
    recipientEmail: recipient,
    timestamp: new Date().toISOString()
  });
});

// Central Form Submission Handler
app.post('/api/forms/submit', async (req, res) => {
  try {
    const clientIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

    // 1. Rate Limiting Check
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        success: false,
        error: 'Too many submissions from your connection. Please wait a few minutes before trying again.'
      });
    }

    const { formType, sourcePage, data, file } = req.body;

    // 2. Basic Payload Validation
    if (!formType || typeof formType !== 'string' || !data || typeof data !== 'object') {
      return res.status(400).json({
        success: false,
        error: 'Invalid submission data. Required fields are missing.'
      });
    }

    // 3. Spam Protection (Honeypot)
    if (data._honeypot || req.body._honeypot) {
      console.warn(`[Spam Guard] Bot caught by honeypot from IP: ${clientIp}`);
      // Return 200 to fool the bot without sending any email
      return res.status(200).json({
        success: true,
        message: 'Submission received successfully.'
      });
    }

    // 4. Validate Required User Data
    const candidateName = (data.name || `${data.firstName || ''} ${data.lastName || ''}`).trim();
    if (!candidateName || candidateName.length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid full name (minimum 2 characters).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(String(data.email).trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.'
      });
    }

    const phone = String(data.phone || '').trim();
    if (!phone || phone.length < 6) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid phone number.'
      });
    }

    // 5. Attachment Processing & Security
    const attachments = [];
    let hasAttachment = false;
    let attachmentFileName = '';

    if (file && file.content && file.name) {
      const sanitizedFilename = path.basename(String(file.name).replace(/[^a-zA-Z0-9._-]/g, '_'));
      const ext = path.extname(sanitizedFilename).toLowerCase();
      const allowedExtensions = ['.pdf', '.doc', '.docx'];

      if (!allowedExtensions.includes(ext)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid file format. Only PDF and Word documents (.pdf, .doc, .docx) are permitted.'
        });
      }

      try {
        const fileBuffer = Buffer.from(file.content, 'base64');
        const maxFileSize = 5 * 1024 * 1024; // 5 MB

        if (fileBuffer.length > maxFileSize) {
          return res.status(400).json({
            success: false,
            error: 'File size exceeds the 5MB limit. Please upload a smaller resume.'
          });
        }

        attachments.push({
          filename: sanitizedFilename,
          content: fileBuffer,
        });
        hasAttachment = true;
        attachmentFileName = sanitizedFilename;
      } catch (decodeErr) {
        return res.status(400).json({
          success: false,
          error: 'Failed to process file attachment. Please try uploading again.'
        });
      }
    }

    // 6. Recipient & Sender Configuration
    // ALWAYS read recipient from server environment variables (never client input)
    const companyEmail = process.env.COMPANY_EMAIL || process.env.ADMIN_EMAIL || 'srisaran2694@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'DATAMINT AARVIX <onboarding@resend.dev>';

    // 7. Dynamic Email Subject Generation
    const cleanFormType = formType.toLowerCase();
    let subject = `New Form Submission - ${candidateName}`;

    if (cleanFormType.includes('career')) {
      const roleTitle = data.position || data.role;
      subject = roleTitle 
        ? `New Career Application - ${candidateName} (${roleTitle})`
        : `New Career Application - ${candidateName}`;
    } else if (cleanFormType.includes('contact')) {
      subject = `New Website Contact Enquiry - ${candidateName}`;
    } else if (cleanFormType.includes('quote')) {
      subject = `New Quote Request - ${candidateName}`;
    } else if (cleanFormType.includes('package')) {
      subject = `New Package Enquiry — ${data.package || candidateName} — ${candidateName}`;
    } else if (cleanFormType.includes('service')) {
      subject = `New Service Enquiry — ${data.service || candidateName} — ${candidateName}`;
    }

    // 8. Generate HTML and Text email templates
    const emailHtml = generateEmailHtml(formType, data, sourcePage, hasAttachment, attachmentFileName);
    const emailText = generateEmailText(formType, data, sourcePage, hasAttachment, attachmentFileName);

    // 9. Deliver Email
    await deliverEmail({
      from: fromEmail,
      to: companyEmail,
      replyTo: String(data.email).trim(),
      subject,
      html: emailHtml,
      text: emailText,
      attachments,
    });

    console.log(`[Form Success] ${formType} submitted by ${candidateName} (${data.email}) -> Sent to ${companyEmail}`);
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you shortly.'
    });

  } catch (error) {
    console.error('[Form Submission Error]', error);

    if (error.code === 'CONFIG_MISSING') {
      return res.status(503).json({
        success: false,
        error: 'Email delivery service is currently not configured on the server. Please ensure RESEND_API_KEY or SMTP credentials are set.'
      });
    }

    return res.status(500).json({
      success: false,
      error: error.message || 'An error occurred while sending your message. Please try again later.'
    });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`\n========================================`);
  console.log(`  DATAMINT AARVIX Backend Server`);
  console.log(`  Running on: http://localhost:${port}`);
  console.log(`  Recipient Email: ${process.env.COMPANY_EMAIL || process.env.ADMIN_EMAIL || 'srisaran2694@gmail.com'}`);
  console.log(`  Health Check: http://localhost:${port}/api/health`);
  console.log(`========================================\n`);
});

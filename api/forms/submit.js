import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import path from 'path';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

// In-Memory Rate Limiter for serverless instance (5 in prod, 50 in dev)
const isDev = process.env.NODE_ENV !== 'production';
const ipHistory = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = isDev ? 50 : 5;

const checkRateLimit = (ip) => {
  const now = Date.now();
  const list = (ipHistory.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (list.length >= MAX_REQUESTS) return false;
  list.push(now);
  ipHistory.set(ip, list);
  return true;
};

const escapeHtml = (unsafe) => {
  if (unsafe === null || unsafe === undefined) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

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
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #E2E8F0;">
          <tr>
            <td style="background-color: ${headerBg}; padding: 32px 36px; border-bottom: 3px solid ${accentColor};">
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
          <tr>
            <td style="padding: 32px 36px;">
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
              ${formattedMessage ? `
              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px;">
                  ${isCareer ? 'Cover Letter / Message' : 'Message / Details'}
                </div>
                <div style="background-color: #F8FAFC; border-left: 4px solid #00E5FF; padding: 14px 18px; border-radius: 4px 8px 8px 4px; font-size: 14px; color: #334155; line-height: 1.7;">
                  ${formattedMessage}
                </div>
              </div>` : ''}
              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px dashed #E2E8F0; font-size: 12px; color: #94A3B8;">
                <strong>Source Page:</strong> ${escapeHtml(sourcePage || 'Website')}<br/>
                <strong>Form Type:</strong> ${escapeHtml(formType)}
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #F8FAFC; padding: 20px 36px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 12px; color: #94A3B8;">
              <p style="margin: 0 0 6px 0;">
                Reply directly to contact <strong>${fullName}</strong> at <a href="mailto:${email}" style="color: #0284C7;">${email}</a>.
              </p>
              <p style="margin: 0;">
                &copy; ${new Date().getFullYear()} DATAMINT AARVIX.
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

const generateEmailText = (formType, data, sourcePage, hasAttachment, fileName) => {
  const isCareer = formType.toLowerCase().includes('career');
  const fullName = data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'N/A';
  const email = data.email || 'N/A';
  const phone = data.phone || 'N/A';
  const position = data.position || data.role || '';
  const message = data.message || data.coverLetter || data.projectDetails || '';

  return `
DATAMINT AARVIX - ${isCareer ? 'NEW CAREER APPLICATION' : 'NEW CONTACT ENQUIRY'}
Date/Time: ${formatDate()}
Form: ${formType} | Source: ${sourcePage || 'Website'}

Name: ${fullName}
Email: ${email}
Phone: ${phone}
${position ? `Position: ${position}\n` : ''}${data.experience ? `Experience: ${data.experience}\n` : ''}${data.service ? `Service: ${data.service}\n` : ''}${hasAttachment ? `Attachment: ${fileName}\n` : ''}
Message:
${message || 'N/A'}
`.trim();
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';

    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        success: false,
        error: 'Too many submissions. Please wait a few minutes before trying again.'
      });
    }

    const { formType, sourcePage, data, file } = req.body;

    if (!formType || typeof formType !== 'string' || !data || typeof data !== 'object') {
      return res.status(400).json({ success: false, error: 'Invalid submission data.' });
    }

    if (data._honeypot || req.body._honeypot) {
      return res.status(200).json({ success: true, message: 'Submission received successfully.' });
    }

    const candidateName = (data.name || `${data.firstName || ''} ${data.lastName || ''}`).trim();
    if (!candidateName || candidateName.length < 2) {
      return res.status(400).json({ success: false, error: 'Please enter a valid full name.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(String(data.email).trim())) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    const phone = String(data.phone || '').trim();
    if (!phone || phone.length < 6) {
      return res.status(400).json({ success: false, error: 'Please enter a valid phone number.' });
    }

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
          error: 'Only PDF and Word documents (.pdf, .doc, .docx) are permitted.'
        });
      }

      const fileBuffer = Buffer.from(file.content, 'base64');
      if (fileBuffer.length > 5 * 1024 * 1024) {
        return res.status(400).json({
          success: false,
          error: 'File size exceeds 5MB limit.'
        });
      }

      attachments.push({
        filename: sanitizedFilename,
        content: fileBuffer,
      });
      hasAttachment = true;
      attachmentFileName = sanitizedFilename;
    }

    const companyEmail = process.env.COMPANY_EMAIL || process.env.ADMIN_EMAIL || 'srisaran2694@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'DATAMINT AARVIX <onboarding@resend.dev>';

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

    const emailHtml = generateEmailHtml(formType, data, sourcePage, hasAttachment, attachmentFileName);
    const emailText = generateEmailText(formType, data, sourcePage, hasAttachment, attachmentFileName);

    const resendApiKey = process.env.RESEND_API_KEY;
    const isResendConfigured = resendApiKey && 
      resendApiKey !== 'PASTE_RESEND_API_KEY_HERE' && 
      resendApiKey.startsWith('re_');

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const isSmtpConfigured = Boolean(smtpHost && smtpUser && smtpPass);

    if (isResendConfigured) {
      const resend = new Resend(resendApiKey);
      const payload = {
        from: fromEmail,
        to: companyEmail,
        replyTo: String(data.email).trim(),
        subject,
        html: emailHtml,
        text: emailText,
      };

      if (attachments.length > 0) {
        payload.attachments = attachments.map(att => ({
          filename: att.filename,
          content: att.content,
        }));
      }

      const { data: resendData, error: resendError } = await resend.emails.send(payload);
      if (resendError) {
        console.error('[Resend Error]', resendError);
        return res.status(500).json({ success: false, error: resendError.message || 'Resend error' });
      }

      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully.'
      });
    }

    if (isSmtpConfigured) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: fromEmail,
        to: companyEmail,
        replyTo: String(data.email).trim(),
        subject,
        html: emailHtml,
        text: emailText,
        attachments: attachments.map(att => ({
          filename: att.filename,
          content: att.content,
        })),
      });

      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully.'
      });
    }

    return res.status(503).json({
      success: false,
      error: 'Email service is not configured. Please set RESEND_API_KEY or SMTP credentials in your environment variables.'
    });

  } catch (error) {
    console.error('[API Error]', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Something went wrong. Please try again.'
    });
  }
}

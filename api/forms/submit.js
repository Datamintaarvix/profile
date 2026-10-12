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

const generateConfirmationHtml = (name, formType, isCareer) => {
  const accentColor = '#00E5FF';
  const headerBg = '#0A0F1D';
  const safeName = escapeHtml(name || 'there');
  const safeFormType = escapeHtml(formType || 'Enquiry');
  const contactAddress = isCareer ? 'hr@datamintaarvix.com' : 'info@datamintaarvix.com';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Submission Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F1F5F9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #E2E8F0;">
          <tr>
            <td style="background-color: ${headerBg}; padding: 32px 36px; border-bottom: 3px solid ${accentColor};">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: ${accentColor}; text-transform: uppercase; margin-bottom: 6px;">
                DATAMINT AARVIX
              </div>
              <div style="font-size: 22px; font-weight: 800; color: #FFFFFF; line-height: 1.3;">
                ${isCareer ? '💼 Application Received' : '📬 We Received Your Message'}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 36px; font-size: 15px; line-height: 1.6; color: #334155;">
              <p style="margin-top: 0;">Hi <strong>${safeName}</strong>,</p>
              ${isCareer ? `
                <p>Thank you for submitting your application to <strong>DATAMINT AARVIX</strong>. Our talent acquisition team has received your submission and will review your profile.</p>
                <p>If your experience aligns with our current hiring requirements, our HR team will reach out to you with next steps.</p>
              ` : `
                <p>Thank you for getting in touch with <strong>DATAMINT AARVIX</strong>. We have received your request regarding <strong>${safeFormType}</strong>.</p>
                <p>A member of our engineering & solutions team is reviewing your message and will get back to you shortly.</p>
              `}
              <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #E2E8F0; font-size: 13px; color: #64748B;">
                If you have questions or additional details, you can reply directly to this email or reach us at <a href="mailto:${contactAddress}" style="color: #0284C7; text-decoration: none; font-weight: 600;">${contactAddress}</a>.
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #F8FAFC; padding: 20px 36px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 12px; color: #94A3B8;">
              <p style="margin: 0;">&copy; ${new Date().getFullYear()} DATAMINT AARVIX Technologies Private Limited. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
};

const generateConfirmationText = (name, formType, isCareer) => {
  const safeName = name || 'there';
  const contactAddress = isCareer ? 'hr@datamintaarvix.com' : 'info@datamintaarvix.com';

  if (isCareer) {
    return `
Hi ${safeName},

Thank you for submitting your application to DATAMINT AARVIX.
Our talent acquisition team has received your submission and will review your profile.

If your qualifications match our current opportunities, an HR specialist will contact you with next steps.

Questions? Reply to this email or contact ${contactAddress}.

Best regards,
DATAMINT AARVIX Talent Team
https://datamintaarvix.com
    `.trim();
  }

  return `
Hi ${safeName},

Thank you for reaching out to DATAMINT AARVIX regarding ${formType || 'your enquiry'}.
We have received your message and our team will get back to you shortly.

Questions? Reply to this email or contact ${contactAddress}.

Best regards,
DATAMINT AARVIX Team
https://datamintaarvix.com
  `.trim();
};

// Clean and validate sender email to prevent sandbox "onboarding@resend.dev" issues
const resolveSenderEmail = (isCareer) => {
  if (isCareer) {
    const customHrFrom = process.env.HR_FROM_EMAIL || process.env.FROM_HR_EMAIL;
    if (customHrFrom && !customHrFrom.includes('resend.dev')) {
      return customHrFrom;
    }
    return 'DATAMINT AARVIX HR <hr@datamintaarvix.com>';
  }

  const customFrom = process.env.FROM_EMAIL;
  if (customFrom && !customFrom.includes('resend.dev')) {
    return customFrom;
  }
  return 'DATAMINT AARVIX <info@datamintaarvix.com>';
};

// Dispatch Email via Resend or SMTP
const deliverEmail = async ({ from, to, replyTo, subject, html, text, attachments }) => {
  const resendApiKey = process.env.RESEND_API_KEY;
  const isResendConfigured = Boolean(
    resendApiKey && 
    resendApiKey.startsWith('re_') && 
    resendApiKey !== 'PASTE_RESEND_API_KEY_HERE'
  );

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const isSmtpConfigured = Boolean(smtpHost && smtpUser && smtpPass);

  // 1. Deliver via Resend
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
        content: att.content,
      }));
    }

    const { data: resendData, error: resendError } = await resend.emails.send(payload);
    if (resendError) {
      console.error('[Resend Delivery Error]', resendError.message || resendError);
      throw new Error(resendError.message || 'Resend email delivery failed.');
    }
    return { provider: 'resend', id: resendData?.id };
  }

  // 2. Deliver via SMTP fallback
  if (isSmtpConfigured) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
      auth: { user: smtpUser, pass: smtpPass },
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

  const err = new Error('CONFIG_MISSING: Neither RESEND_API_KEY nor SMTP credentials configured.');
  err.code = 'CONFIG_MISSING';
  throw err;
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

    // 6. Recipient & Sender Resolution
    // - Verified sender domain: datamintaarvix.com
    // - Career applications -> hr@datamintaarvix.com (From: DATAMINT AARVIX HR <hr@datamintaarvix.com>)
    // - Contact & general -> info@datamintaarvix.com (From: DATAMINT AARVIX <info@datamintaarvix.com>)
    const cleanFormType = (formType || '').toLowerCase();
    const cleanSource = (sourcePage || '').toLowerCase();
    const isCareer = cleanFormType.includes('career') || 
                     cleanFormType.includes('job') || 
                     cleanFormType.includes('intern') || 
                     cleanSource.includes('/careers') || 
                     cleanSource.includes('career');

    const hrEmail = process.env.HR_EMAIL || process.env.CAREERS_EMAIL || 'hr@datamintaarvix.com';
    const contactEmail = process.env.CONTACT_EMAIL || process.env.INFO_EMAIL || process.env.COMPANY_EMAIL || 'info@datamintaarvix.com';
    const targetEmail = isCareer ? hrEmail : contactEmail;
    const fromEmail = resolveSenderEmail(isCareer);

    // 7. Dynamic Email Subject Generation
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

    // 8. Generate Notification Templates
    const emailHtml = generateEmailHtml(formType, data, sourcePage, hasAttachment, attachmentFileName);
    const emailText = generateEmailText(formType, data, sourcePage, hasAttachment, attachmentFileName);

    // 9. Deliver Admin Notification to Business Inbox
    await deliverEmail({
      from: fromEmail,
      to: targetEmail,
      replyTo: String(data.email).trim(),
      subject,
      html: emailHtml,
      text: emailText,
      attachments,
    });

    console.log(`[Form Success] ${formType} submitted by ${candidateName} (${data.email}) -> Sent to ${targetEmail} from ${fromEmail}`);

    // 10. Deliver Customer Acknowledgement Email
    const customerEmail = String(data.email).trim();
    if (customerEmail) {
      try {
        const confirmSubject = isCareer 
          ? 'Application Received — DATAMINT AARVIX'
          : 'Thank you for contacting DATAMINT AARVIX';
        const confirmHtml = generateConfirmationHtml(candidateName, formType, isCareer);
        const confirmText = generateConfirmationText(candidateName, formType, isCareer);

        await deliverEmail({
          from: fromEmail,
          to: customerEmail,
          replyTo: isCareer ? hrEmail : contactEmail,
          subject: confirmSubject,
          html: confirmHtml,
          text: confirmText,
        });
        console.log(`[Confirmation Success] Sent acknowledgement to ${customerEmail}`);
      } catch (confirmErr) {
        console.warn('[Confirmation Warning]', confirmErr.message || confirmErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you shortly.'
    });

  } catch (error) {
    console.error('[API Error]', error.message || error);

    if (error.code === 'CONFIG_MISSING') {
      return res.status(503).json({
        success: false,
        error: 'Email delivery service is currently not configured on the server. Please check RESEND_API_KEY settings.'
      });
    }

    return res.status(500).json({
      success: false,
      error: 'We were unable to deliver your message at this time. Please try again or reach out directly to info@datamintaarvix.com.'
    });
  }
}

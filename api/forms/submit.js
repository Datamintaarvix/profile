import { Resend } from 'resend';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

const formatDate = () => {
  return new Date().toLocaleString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const generateEmailHtml = (formType, data, sourcePage) => {
  let customerDetails = '';
  let projectDetails = '';
  let otherDetails = '';

  if (data.name || data.firstName || data.lastName) {
    const fullName = data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim();
    customerDetails += `<p><strong>Name:</strong> ${fullName}</p>`;
  }
  if (data.email) customerDetails += `<p><strong>Email:</strong> ${data.email}</p>`;
  if (data.phone) customerDetails += `<p><strong>Phone:</strong> ${data.phone}</p>`;
  if (data.company) customerDetails += `<p><strong>Company:</strong> ${data.company}</p>`;
  if (data.location) customerDetails += `<p><strong>Location:</strong> ${data.location}</p>`;

  if (data.service) projectDetails += `<p><strong>Service:</strong> ${data.service}</p>`;
  if (data.package) projectDetails += `<p><strong>Package:</strong> ${data.package}</p>`;
  if (data.budget) projectDetails += `<p><strong>Budget:</strong> ${data.budget}</p>`;
  if (data.projectType) projectDetails += `<p><strong>Project Type:</strong> ${data.projectType}</p>`;
  if (data.timeline) projectDetails += `<p><strong>Timeline:</strong> ${data.timeline}</p>`;
  if (data.position) projectDetails += `<p><strong>Position:</strong> ${data.position}</p>`;
  if (data.experience) projectDetails += `<p><strong>Experience:</strong> ${data.experience}</p>`;
  if (data.linkedin) projectDetails += `<p><strong>LinkedIn:</strong> <a href="${data.linkedin}">${data.linkedin}</a></p>`;
  if (data.portfolio) projectDetails += `<p><strong>Portfolio:</strong> <a href="${data.portfolio}">${data.portfolio}</a></p>`;
  
  if (data.subject) otherDetails += `<p><strong>Subject:</strong> ${data.subject}</p>`;
  if (data.message || data.coverLetter) {
    const msg = data.message || data.coverLetter;
    otherDetails += `<p><strong>Message / Cover Letter:</strong><br/>${msg.replace(/\n/g, '<br/>')}</p>`;
  }

  return `
    <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; color: #333;">
      <h2 style="color: #0F172A; border-bottom: 2px solid #00B8FF; padding-bottom: 10px;">DATAMINT AARVIX <br/> <span style="font-size: 16px; color: #64748B;">NEW FORM SUBMISSION</span></h2>
      <p><strong>FORM TYPE:</strong> ${formType}</p>
      <p><strong>SUBMITTED DATE/TIME:</strong> ${formatDate()}</p>
      <p><strong>SOURCE PAGE:</strong> ${sourcePage || 'Unknown'}</p>
      <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
      <h3 style="color: #0F172A;">CUSTOMER DETAILS</h3>
      ${customerDetails || '<p>N/A</p>'}
      <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
      <h3 style="color: #0F172A;">REQUEST DETAILS</h3>
      ${projectDetails || '<p>N/A</p>'}
      ${otherDetails ? `
        <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
        <h3 style="color: #0F172A;">ADDITIONAL INFORMATION</h3>
        ${otherDetails}
      ` : ''}
      <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
      <p style="font-size: 12px; color: #94A3B8;">
        DATAMINT AARVIX<br/>
        This is an automated form notification.
      </p>
    </div>
  `;
};

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { formType, sourcePage, data, file } = req.body;
    
    if (!formType || !data) {
      return res.status(400).json({ success: false, error: "Invalid submission" });
    }

    const name = data.name || data.firstName || 'User';
    if (!name || !data.email || !formType) {
      return res.status(400).json({ success: false, error: "Invalid submission" });
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return res.status(400).json({ success: false, error: "Invalid submission" });
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'srisaran2694@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'DATAMINT AARVIX <info@datamintaarvix.com>';

    let subject = \`New Form Submission: \${formType}\`;
    if (formType.toLowerCase().includes('contact')) {
      subject = \`New Contact Enquiry — \${name}\`;
    } else if (formType.toLowerCase().includes('quote')) {
      subject = \`New Quote Request — \${name}\`;
    } else if (formType.toLowerCase().includes('career')) {
      subject = \`New Career Application — \${name}\`;
    } else if (formType.toLowerCase().includes('package')) {
      subject = \`New Package Enquiry — \${data.package || name} — \${name}\`;
    } else if (formType.toLowerCase().includes('service')) {
      subject = \`New Service Enquiry — \${data.service || name} — \${name}\`;
    } else if (formType.toLowerCase().includes('consultation')) {
      subject = \`New Consultation Request — \${name}\`;
    }

    const htmlBody = generateEmailHtml(formType, data, sourcePage);

    const emailPayload = {
      from: fromEmail,
      to: adminEmail,
      replyTo: data.email,
      subject: subject,
      html: htmlBody,
    };

    if (file && file.content && file.name) {
      // Vercel Serverless function supports sending Base64 strings directly in Resend attachments
      emailPayload.attachments = [
        {
          filename: file.name,
          content: Buffer.from(file.content, 'base64'),
        }
      ];
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'PASTE_RESEND_API_KEY_HERE') {
      console.warn('RESEND_API_KEY is not configured.');
      return res.status(200).json({ success: true, message: 'Submission received successfully (Mocked).' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data: resendData, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
    }

    return res.status(200).json({ success: true, message: 'Submission received successfully.' });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  }
}

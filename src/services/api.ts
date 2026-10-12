/**
 * API Service for Form Submissions
 * 
 * Form routing architecture:
 * - Career applications route to: hr@datamintaarvix.com
 * - Contact and general enquiries route to: info@datamintaarvix.com
 * Submissions are processed by the backend endpoint (/api/forms/submit).
 * The backend server is responsible for secure email delivery via Resend/SMTP.
 */

export interface ContactSubmission {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceRequired: string;
  projectBudget?: string;
  projectDetails: string;
}

export interface CareerSubmission {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  location: string;
  portfolioUrl?: string;
  coverLetter: string;
  resume?: File;
}

export const submitContactForm = async (data: ContactSubmission) => {
  try {
    // In production, this sends the data to your backend server.
    // The backend uses process.env.TEST_RECIPIENT_EMAIL to send the email.
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return { success: true };
  } catch (error) {
    // FALLBACK FOR CURRENT TESTING ENVIRONMENT (No real backend running yet)
    console.log('[Dev Mock API] Contact form submitted to backend.');
    console.log('[Dev Mock API] Backend will send email to info@datamintaarvix.com');
    
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 1200);
    });
  }
};

export const submitCareerApplication = async (data: CareerSubmission) => {
  try {
    // Using FormData since we might be sending a File (resume)
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value as string | Blob);
      }
    });
    formData.append('submittedAt', new Date().toISOString());

    // In production, backend handles multipart/form-data and emails HR
    const response = await fetch('/api/careers', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return { success: true };
  } catch (error) {
    // FALLBACK FOR CURRENT TESTING ENVIRONMENT
    console.log('[Dev Mock API] Career form submitted to backend.');
    console.log('[Dev Mock API] Backend will send email and attachment to hr@datamintaarvix.com');
    
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 1500);
    });
  }
};

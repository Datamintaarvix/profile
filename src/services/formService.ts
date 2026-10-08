// Centralized Form Submission Service
const API_URL = 'http://localhost:5000/api/forms/submit';

export interface FormSubmissionPayload {
  formType: 'Contact' | 'Get a Quote' | 'Careers' | 'Package' | 'Service' | 'Consultation' | 'Newsletter' | string;
  data: Record<string, any>;
  sourcePage: string;
  file?: File | null;
}

// Helper to convert File to Base64
const fileToBase64 = (file: File): Promise<{ content: string; name: string; type: string }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result as string;
      // Strip off the data:url prefix to get just the base64 string
      const base64Data = encoded.replace(/^data:(.*,)?/, '');
      resolve({
        content: base64Data,
        name: file.name,
        type: file.type,
      });
    };
    reader.onerror = error => reject(error);
  });
};

export const sendAdminNotification = async ({ formType, data, sourcePage, file }: FormSubmissionPayload) => {
  try {
    let fileData = null;
    if (file) {
      fileData = await fileToBase64(file);
    }

    const payload = {
      formType,
      sourcePage,
      data,
      file: fileData
    };

    // Use relative path so Vercel Serverless Functions can pick it up natively
    const response = await fetch('/api/forms/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Submission failed.');
    }

    return result;
  } catch (error: any) {
    console.error('Error submitting form:', error);
    throw new Error(error.message || 'Something went wrong. Please try again.');
  }
};

// Centralized Form Submission Service
const API_URL = 'http://localhost:5000/api/forms/submit';

export interface FormSubmissionPayload {
  formType: 'Contact' | 'Get a Quote' | 'Careers' | 'Package' | 'Service' | 'Consultation' | 'Newsletter' | string;
  data: Record<string, any>;
  sourcePage: string;
  file?: File | null;
}

export const sendAdminNotification = async ({ formType, data, sourcePage, file }: FormSubmissionPayload) => {
  try {
    const formData = new FormData();
    formData.append('formType', formType);
    formData.append('sourcePage', sourcePage);
    formData.append('data', JSON.stringify(data));

    if (file) {
      formData.append('resume', file);
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData, // fetch will automatically set the correct boundary for multipart/form-data
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Submission failed.');
    }

    return result;
  } catch (error: any) {
    console.error('Error submitting form:', error);
    throw new Error(error.message || 'Something went wrong. Please try again.');
  }
};

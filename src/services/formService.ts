// Centralized Form Submission Service

export interface FormSubmissionPayload {
  formType: 'Contact' | 'Get a Quote' | 'Careers' | 'Package' | 'Service' | 'Consultation' | 'Newsletter' | string;
  data: Record<string, any>;
  sourcePage: string;
  file?: File | null;
}

// Helper to convert File to Base64 with client-side size check (max 5MB)
const fileToBase64 = (file: File): Promise<{ content: string; name: string; type: string }> => {
  return new Promise((resolve, reject) => {
    if (file.size > 5 * 1024 * 1024) {
      reject(new Error('File size exceeds the 5MB limit. Please upload a smaller file.'));
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const encoded = reader.result as string;
      // Strip off the data:url prefix to obtain the raw base64 string
      const base64Data = encoded.replace(/^data:(.*,)?/, '');
      resolve({
        content: base64Data,
        name: file.name,
        type: file.type,
      });
    };
    reader.onerror = () => reject(new Error('Failed to read file. Please try selecting the file again.'));
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
      sourcePage: sourcePage || window.location.href,
      data,
      file: fileData,
    };

    // Submits to /api/forms/submit (proxied to Express port 5000 in dev, or Vercel serverless in prod)
    const response = await fetch('/api/forms/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    let result: any = null;
    try {
      result = await response.json();
    } catch {
      // Non-JSON response
      throw new Error(`Server returned status ${response.status} (${response.statusText}).`);
    }

    if (!response.ok || !result.success) {
      const errorMsg = result?.error || result?.message || `Submission failed with status ${response.status}.`;
      throw new Error(errorMsg);
    }

    return result;
  } catch (error: any) {
    console.error('Error submitting form:', error);
    throw error;
  }
};

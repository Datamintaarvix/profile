import { sendAdminNotification, type FormSubmissionPayload } from '../services/formService';

export const sendEmail = async (payload: FormSubmissionPayload) => {
  return await sendAdminNotification(payload);
};

export { sendAdminNotification };
export type { FormSubmissionPayload };

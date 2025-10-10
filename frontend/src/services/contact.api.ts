import api from "./axios";

export interface ContactPayload {
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
  message: string;
  subject: string;
}

export const sendContactEmail = async (payload: ContactPayload) => {
  const response = await api.post("/contact/", payload);
  return response.data;
};

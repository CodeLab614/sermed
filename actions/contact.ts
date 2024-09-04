"use server";

import { sendEmailContact } from "@/lib/email";

interface ActionSendEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ActionSendEmail = async ({
  name,
  email,
  message,
}: ActionSendEmailProps) => {
  await sendEmailContact({ name, email, message });
  return;
};

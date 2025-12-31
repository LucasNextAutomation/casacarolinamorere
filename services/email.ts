
interface BookingData {
  name: string;
  email: string;
  phone: string;
  startDate: string;
  endDate: string;
  guests: string;
  message?: string;
  totalPrice: number;
}

export const sendConfirmationEmails = async (data: BookingData) => {
  // In a real production environment, this would call your backend (Node.js/Python)
  // which uses SendGrid, AWS SES, or Mailgun to securely send SMTP emails.
  
  console.log("--- SIMULATING EMAIL NOTIFICATIONS ---");
  
  // 1. GUEST CONFIRMATION
  console.log(`SENDING TO GUEST: ${data.email}`);
  console.log(`Subject: Your sanctuary awaits at Casa Carolina Moreré`);
  console.log(`Content: Hello ${data.name}, your reservation from ${data.startDate} to ${data.endDate} is confirmed. Our staff, Ronaldo and Zil, are looking forward to welcoming your party of ${data.guests}. Total: R$ ${data.totalPrice.toLocaleString()}.`);

  // 2. OWNER NOTIFICATION
  console.log(`SENDING TO OWNER: carophe@hotmail.com`);
  console.log(`Subject: NEW BOOKING: ${data.name} - ${data.startDate}`);
  console.log(`Content: You have a new booking from ${data.name}. Guests: ${data.guests}. Notes: ${data.message || 'None'}. Phone: ${data.phone}`);

  // Simulate network delay
  return new Promise((resolve) => setTimeout(resolve, 1500));
};

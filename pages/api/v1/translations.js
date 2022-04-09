import { getSession } from "next-auth/react";
import nodemailer from "nodemailer";

const translationsHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send();
    return;
  }

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.status(401).send();
    return;
  }

  const { email } = session.user;
  const { data, lang } = req.body;

  for (const key in data)
    data[key] = data[key].trim();

  const content = JSON.stringify(data, null, 2);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"Translation Update Service" <${process.env.EMAIL_SENDER}>`,
    to: process.env.EMAIL_I18N_TARGET,
    subject: `Update '${lang}' translations for uasafety.org`,
    text: `${email} updated '${lang}' translations for uasafety.org`,
    attachments: [
      {
        filename: "translation.json",
        content,
      },
    ],
  });

  console.log("Sent translation update message:", info);

  res.json({ updated: true });
}

export default translationsHandler;

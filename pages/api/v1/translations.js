import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import nodemailer from "nodemailer";

const translationsHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send();
    return;
  }

  const { user } = getSession(req, res);
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
    subject: `Update '${lang}' translations for leaveukraine.com`,
    text: `${user.name} updated '${lang}' translations for leaveukraine.com`,
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

export default withApiAuthRequired(translationsHandler);

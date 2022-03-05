import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

const translationsHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send();
    return;
  }

  const { user } = getSession(req, res);
  const { data, lang } = req.body;

  res.json({ updated: 0 });
}

export default withApiAuthRequired(translationsHandler);

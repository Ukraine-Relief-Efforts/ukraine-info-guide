import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import {
  readFile as readFileCallback,
  writeFile as writeFileCallback,
} from "fs";
import { promisify } from "util";

const readFile = promisify(readFileCallback);
const writeFile = promisify(writeFileCallback);

const translationsHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send();
    return;
  }

  const { user } = getSession(req, res);
  const { data, lang } = req.body;

  for (const key in data)
    data[key] = data[key].trim();

  const path = `./public/locales/${lang}/translation.json`;

  const oldData = JSON.parse(await readFile(path));

  const newData = { ...oldData, ...data };

  const output = JSON.stringify(newData, null, 2);

  await writeFile(path, output);

  // TODO: Send make commit and pull request
  console.log(user);


  res.json({ updated: 0 });
}

export default withApiAuthRequired(translationsHandler);

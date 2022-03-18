import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

// TODO: Translate these when we know what the actual schema looks like
const columns = [
  "Case Number",
  "Client Number",
  "Full name",
  "Languages",
  "Phone",
  "Email/Social Media",
  "Gender",
  "Date of Birth",
  "Current Location/Time Zone",
  "Destination",
  "Passport Country",
  "Secondary ID/Documentation",
  "Case Manager",
  "Case Notes",
];

const rows = [
  [
    "123", "432", "An Example Name", "Ukrainian", "123 456 789", "a@b.com",
    "Male", "01/02/03", "Poland", "France", "Ukraine", "None", "Mr Example", "",
  ],
];

const RefugeeDatabase = () => {
  return (
    <Grid
      columns={columns}
      data={rows}
      search={true}
      pagination={{
        enabled: true,
        limit: 5,
      }}
      resizable
      sort
    />
  );
}

export default RefugeeDatabase;

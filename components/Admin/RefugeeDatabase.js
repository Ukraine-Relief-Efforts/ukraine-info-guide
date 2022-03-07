import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

// TODO: Translate these when we know what the actual schema looks like
const columns = [
  "First Name",
  "Last Name",
  "Address",
];

const rows = [
  [ "A", "Example", "1 Example Street" ],
  [ "B", "Example", "2 Example Street" ],
  [ "C", "Example", "3 Example Street" ],
  [ "D", "Example", "4 Example Street" ],
  [ "E", "Example", "5 Example Street" ],
  [ "F", "Example", "6 Example Street" ],
  [ "G", "Example", "7 Example Street" ],
  [ "H", "Example", "8 Example Street" ],
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
    />
  );
}

export default RefugeeDatabase;

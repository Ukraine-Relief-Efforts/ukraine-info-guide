import { SpinnerCircular } from 'spinners-react';

const Spinner = ({ enabled }) => (
  <div className="w-full">
    <SpinnerCircular
      enabled={enabled}
      color={"#0058B7"}
      className="block mx-auto"
    />
  </div>
);

export default Spinner;

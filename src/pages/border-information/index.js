import React from "react";
import { PolandBorderInfo } from "../../Components/PolandBorder";

const BorderInformationpage = () => {
  return (
    <section>
      <PolandBorderInfo></PolandBorderInfo>
      <div className="flex flex-col items-center">
        <p>Border information</p>
      </div>
    </section>
  );
};

export default BorderInformationpage;

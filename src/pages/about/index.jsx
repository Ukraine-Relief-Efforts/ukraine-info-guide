import React from "react";
import { PolandBorderInfo } from "../../Components/PolandBorder";

const AboutPage = () => {
  return (
    <section>
      <PolandBorderInfo></PolandBorderInfo>
      <div className="flex flex-col items-center">
        <p>About page</p>
      </div>
    </section>
  );
};

export default AboutPage;

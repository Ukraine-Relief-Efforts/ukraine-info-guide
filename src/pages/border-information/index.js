import React from "react";
import Hero from "../../Components/Hero/Hero";

const BorderInformationPage = () => {
  return (
    <section>
      <Hero
        title="How to cross Poland's border"
        subtitle="👉 www.gov.pl 👈"
        subtitleLink="https://www.gov.pl/web/udsc/ukraina-en"
      />
      <div className="flex flex-col flex-wrap mt-10 items-center justify-center">
        <p>Border information</p>
      </div>
    </section>
  );
};

export default BorderInformationPage;

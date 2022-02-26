import Country from "../../Components/Country/Country";
import Hero from "../../Components/Hero/Hero";

function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Hero
        title="How to cross Poland's border"
        subtitle="👉 www.gov.pl 👈"
        subtitleLink="https://www.gov.pl/web/udsc/ukraina-en"
      />
      <div className="flex flex-col flex-wrap mt-10 items-center justify-center">
        <Country />
      </div>
    </section>
  );
}
export default Home;

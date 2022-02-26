import Hero from "../../Components/Hero/Hero";
import Layout from "../../Components/Layout/Layout";

function Home() {
  return (
    <Layout
      hero={
        <Hero
          title="How to cross Poland's border"
          subtitle="👉 www.gov.pl 👈"
          subtitleLink="https://www.gov.pl/web/udsc/ukraina-en"
        />
      }
    >
      <p>Home page</p>
    </Layout>
  );
}
export default Home;

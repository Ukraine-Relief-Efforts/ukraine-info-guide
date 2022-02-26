import Country from "../../Components/Country/Country";
import { PolandBorderInfo } from "../../Components/PolandBorder";

function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <PolandBorderInfo />
      <div className="flex flex-col flex-wrap mt-10 items-center justify-center">
        <Country />
      </div>
    </section>
  );
}
export default Home;

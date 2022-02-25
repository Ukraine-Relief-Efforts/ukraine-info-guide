import Country from "../Country/Country";
import { PolandBorderInfo } from "../../Pages/PolandBorder";

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

import Country from "../Country/Country";

function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-5">
      <div className="flex flex-col flex-wrap mt-10 items-center justify-center">
        <Country />
      </div>
    </section>
  );
}
export default Home;

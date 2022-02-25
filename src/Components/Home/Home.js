import BorderCard from "../Country/Country";

function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-5">
      <p className="text-2xl font-bold">MAIN PAGE</p>
      <div className="flex flex-col flex-wrap mt-10">
        <BorderCard />
      </div>
    </section>
  );
}
export default Home;

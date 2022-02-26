const Hero = ({ title, subcomponent = null }) => {
  return (
    <div className="bg-yellow-ukraine w-full">
      <div className="max-w-6xl mx-auto justify-center items-center flex mb-5 py-20 ">
        <div className=" items-center">
          <p className="text-2xl text-bold text-red-500 text-center">{title}</p>
          {subcomponent}
        </div>
      </div>
    </div>
  );
};

export default Hero;

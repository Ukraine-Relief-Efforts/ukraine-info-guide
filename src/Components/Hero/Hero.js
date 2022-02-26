const Hero = ({ title, subcomponent = null }) => {
  return (
    <div className="w-full shadow-md bg-[#FFF199] p-2">
      <div className="max-w-6xl mx-auto justify-center items-center flex mb-5 py-16">
        <div className="items-center">
          <p className="text-4xl text-bold text-black text-center">{title}</p>
          {subcomponent}
        </div>
      </div>
    </div>
  );
};

export default Hero;

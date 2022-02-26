const Hero = ({ title, subcomponent = null }) => {
  return (
    <div className="justify-center items-center flex mb-5 py-20 bg-yellow-ukraine w-full">
      <div className=" items-center">
        <p className="text-2xl text-bold text-red-500 text-center">{title}</p>
        {subcomponent}
      </div>
    </div>
  );
};

export default Hero;

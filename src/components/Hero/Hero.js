const Hero = ({ title, subcomponent = null }) => {
  return (
    <div className="justify-center items-center flex mb-10 py-10 bg-yellow-ukraine w-full">
      <div className="items-center">
        <p className="text-3xl text-center font-bold">{title}</p>
        {subcomponent}
      </div>
    </div>
  );
};

export default Hero;

const Hero = ({ title, subcomponent = null }) => {
  return (
    <div className="justify-center items-center flex mb-10 py-10 bg-yellow-light w-full shadow-[0_5px_50px_-10px_rgba(0,0,0,0.3)]">
      <div className="items-center">
        <p className="text-3xl text-center font-bold">{title}</p>
        {subcomponent}
      </div>
    </div>
  );
};

export default Hero;

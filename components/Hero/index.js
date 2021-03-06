const Hero = ({ title, subcomponent = null, compact = false }) => {
  return (
    <div className={`relative justify-center items-center flex py-5 md:py-10 bg-yellow-light w-full shadow-[0_5px_10px_-5px_rgba(0,0,0,0.2)] ${compact ? "" : "mb-10"}`} style={{ zIndex: 500 }}>
      <div className="items-center px-2">
        <p className="text-2xl md:text-3xl text-center font-bold">{title}</p>
        {subcomponent}
      </div>
    </div>
  );
};

export default Hero;

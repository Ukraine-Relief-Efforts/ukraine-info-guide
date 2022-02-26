const Hero = ({ title, subtitle, subtitleLink }) => {
  return (
    <div className="justify-center items-center flex mb-5 py-5 bg-yellow-400 w-full">
      <div className=" items-center">
        <p className="text-2xl text-bold text-red-500 text-center">
          {title}
        </p>
        {subtitle &&
          <p className="text-xl text-center">
            {subtitleLink
              ? <a className="text-red border-information" href={subtitleLink}>
                {subtitle}
              </a>
            : subtitle
            }
          </p>
        }
      </div>
    </div>
  );
}

export default Hero;

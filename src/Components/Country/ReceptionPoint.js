function ReceptionPoint() {
  return (
    <section className="border-card-reception">
      <div className="border-card-address">
        <p className="text-lg font-semibold">ADDRESS</p>
        <p>
          Pałac Suchodolskich Gminny Ośrodek Kultury i Turystyki, ul. Parkowa 5,
          22-175 Dorohusk – osiedle{" "}
        </p>
      </div>
      <div className="border-card-qr">
        <img
          src="https://www.qr-online.pl/bin/qr/8caf19812112ea544f35e994cd58573c.png"
          alt=""
        />
      </div>
      <a
        href="https://www.google.pl/maps/place/Gminny+O%C5%9Brodek+Kultury+i+Turystyki/@51.1653246,23.8026394,17z/data=!3m1!4b1!4m5!3m4!1s0x4723890b09b9cd4d:0x5747c0a6dfbbb992!8m2!3d51.1653213!4d23.8048281"
        className="border-card-google"
      >
        GOOGLE MAPS
      </a>
    </section>
  );
}
export default ReceptionPoint;

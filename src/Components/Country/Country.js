function BorderCard() {
  return (
    <section className="border-card">
      <p className="text-2xl font-semibold">Poland</p>
      <p className="text-xl font-semibold mb-5">Help for Ukrainian citizens</p>
      <ul className="text-center">
        <p className="font-semibold">INFORMATION FOR UKRAINE CITIZENS</p>
        <li className="border-card-point">
          <p>
            If you are fleeing the armed conflict in Ukraine, you will be
            admitted to Poland.
          </p>
        </li>
        <li className="border-card-point">
          <p>
            If you do not have a place of stay in Poland, go to the nearest
            reception point.
          </p>
        </li>
        <li className="border-card-point">
          <p>
            At the reception desk: you will receive more information about your
            stay in Poland, we will provide you with temporary accommodation in
            Poland, you will receive a hot meal, a drink, basic medical care and
            a place to rest.
          </p>
        </li>
      </ul>
      <img
        className="border-card-qr"
        src="https://www.qr-online.pl/bin/qr/8caf19812112ea544f35e994cd58573c.png"
        alt=""
      />
      <a
        href="https://www.google.pl/maps/place/Gminny+O%C5%9Brodek+Kultury+i+Turystyki/@51.1653246,23.8026394,17z/data=!3m1!4b1!4m5!3m4!1s0x4723890b09b9cd4d:0x5747c0a6dfbbb992!8m2!3d51.1653213!4d23.8048281"
        className="border-card-google"
      >
        GOOGLE MAPS
      </a>
      <div className="border-card-address">
        <p className="text-lg font-semibold">ADDRESS</p>
        <p>
          Pałac Suchodolskich Gminny Ośrodek Kultury i Turystyki, ul. Parkowa 5,
          22-175 Dorohusk – osiedle{" "}
        </p>
      </div>
    </section>
  );
}
export default BorderCard;

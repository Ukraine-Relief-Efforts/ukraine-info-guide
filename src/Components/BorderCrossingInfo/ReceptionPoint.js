function ReceptionPoint(props) {
  return (
    <section className="border-card-reception">
      <div className="border-card-address">
        <p className="text-lg font-semibold">ADDRESS</p>
        <p>{props.data.address}</p>
      </div>
      <div className="border-card-qr">
        <img src={props.data.qr} alt="QR CODE" />
      </div>
      <a href={props.data.gmaps} className="border-card-google">
        GOOGLE MAPS
      </a>
    </section>
  );
}
export default ReceptionPoint;

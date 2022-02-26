function FoodShelterPoint(props) {
    return (
      <section className="foodshelter-card-reception">
        <div className="foodshelter-card-type">
          <p className="text-lg font-semibold">TYPE</p>
          <p>{props.data.type}</p>
        </div>
        <div className="foodshelter-card-address">
          <p className="text-lg font-semibold">ADDRESS</p>
          <p>{props.data.address}</p>
        </div>
        <div className="foodshelter-card-thumbnail">
          <img src={props.data.thumbnail} alt="thumbnail" />
        </div>
        <a href={props.data.gmaps} className="foodshelter-card-google">
          GOOGLE MAPS
        </a>
      </section>
    );
  }
  export default FoodShelterPoint;
  
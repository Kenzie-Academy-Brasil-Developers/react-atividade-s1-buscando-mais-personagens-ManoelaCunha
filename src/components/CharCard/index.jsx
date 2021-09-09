import "./styles.css";

const CharCard = ({
  character: { image, name, location, origin, species, status },
}) => {
  return (
    <div
      className="card"
      style={
        status === "Alive"
          ? { background: "mediumseagreen" }
          : status === "Dead"
          ? { background: "firebrick" }
          : { background: "gray" }
      }
    >
      <h4>{name}</h4>

      <figure>
        <img className="img-character" src={image} alt={name} />
      </figure>

      <div className="card-text">
        <p>
          <strong>Specie:</strong> {species}
        </p>
        <p>
          <strong>Origin:</strong> {origin.name}
        </p>
        <p>
          <strong>Location:</strong> {location.name}
        </p>
      </div>
    </div>
  );
};

export default CharCard;

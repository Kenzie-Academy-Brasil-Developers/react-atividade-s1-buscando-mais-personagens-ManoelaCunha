import "./styles.css";
import CharCard from "../CharCard";

const Characters = ({ characterList, returnPage, nextPage }) => {
  return (
    <>
      <h1>CHARACTERS</h1>

      <div className="container-btn">
        <button onClick={returnPage}>Return</button>
        <button onClick={nextPage}>Next</button>
      </div>

      <div className="container-card">
        {characterList.map((item) => (
          <CharCard key={item.id} character={item} />
        ))}
      </div>
    </>
  );
};

export default Characters;

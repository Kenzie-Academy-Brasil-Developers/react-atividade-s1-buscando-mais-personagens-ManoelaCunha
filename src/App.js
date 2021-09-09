import "./App.css";
import img from "./assets/slogan.png";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);

  //Renderização
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);

  //Atualização
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [next]);

  const returnPage = () => {
    next > 1 && setNext(next - 1);
  };

  const nextPage = () => {
    next < 34 && setNext(next + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <figure>
          <img className="img-slogan" src={img} alt="Rick and Marty"></img>
        </figure>
      </header>
      <article className="App-content">
        <Characters
          characterList={characterList}
          returnPage={returnPage}
          nextPage={nextPage}
        />
      </article>
    </div>
  );
};

export default App;

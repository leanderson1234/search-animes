import { useEffect, useState } from "react";
import styled from "styled-components";

import CardSearch from "./components/CardSearch";
import { useSelector, useDispatch } from "react-redux";

import { animesAsync, selectAnimes } from "./features/animesSlice";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1em;
  > span {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
const SearchInput = styled.input`
  padding-left: 5px;
  height: 30px;
  border: solid 1px #9f85cd;
  border-radius: 15px;
  text-align: center;
  width: 45%;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;
function App() {
  const URI = "https://kitsu.io/api/edge/anime";
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  /*
   * Para pesquisa por botão
   * const [handle,setHandle] = useState(false);
   * const onClick = () => setHandle(!handle)
   * <button onClick={onClick}>Search</button>
   */
  const animes = useSelector(selectAnimes);

  useEffect(async () => {
    dispatch(animesAsync(`${URI}?filter[text]=${search}`));
  }, [search]);

  return (
    <div className="App">
      <Container>
        <h1>Pesquise um anime</h1>
        <span>Acesse o trailer clicando no anime!</span>
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="search"
        />
        <CardSearch animes={animes} />
      </Container>
    </div>
  );
}

export default App;

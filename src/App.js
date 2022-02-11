import {useEffect, useState} from 'react'
import styled from 'styled-components'

import CardSearch from './components/CardSearch'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4em;
`;
  const SearchInput = styled.input`
    padding-left: 5px;
    height: 30px;
    border: solid 1px #9f85cd;
    border-radius: 15px;
    text-align: center;
    width: 45%;
  `
function App() {
  const URI = 'https://kitsu.io/api/edge/anime'
  const [search,setSearch] = useState('');
  /*
  * Para pesquisa por botão 
  * const [handle,setHandle] = useState(false);
  * const onClick = () => setHandle(!handle)
  * <button onClick={onClick}>Search</button>
  */
  const [animes,setAnimes] = useState([]);

  useEffect(async () =>{
    const REQUEST = await fetch(`${URI}?filter[text]=${search}`)
    const RESPONSE = await REQUEST.json()
    setAnimes(RESPONSE)
  },[search])

  return (
    <div className="App">
      <Container>
        <h1>Search your anime</h1>
        <SearchInput type="text" value={search} onChange={(e) => setSearch(e.target.value)} name="search"/>
          <CardSearch animes={animes}/>
       </Container>
    </div>
  );
}

export default App;

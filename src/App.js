import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Request';
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Top Action Movies" fetchUrl={requests.fetchTopActionMovies} />
      <Row title="Top Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />
      <Row title="Top Romance Movies" fetchUrl={requests.fetchTopRomanceMovies} />
      <Row title="Top Horror Movies" fetchUrl={requests.fetchTopHorrorMovies} />
      <Row title="Top Documentaries" fetchUrl={requests.fetchTopDocumentaries} />
      
      


    </div>
  );
}

export default App;

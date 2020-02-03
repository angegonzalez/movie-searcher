import React from "react";
import SearchForm from "./components/SearchForm";
import MoviesList from "./components/MoviesList";

const App: React.SFC = () => {
  const [results= [], setResults] = React.useState([]);

  const handleResults = (movies: []) => {
    setResults(movies);
  };
  return (
    <div className="container" style={{ marginTop: "3rem" }}>
      <SearchForm onResults={handleResults}></SearchForm>
      {results.length !== 0 ? (
        <div className="row" style={{ marginTop: "1.5rem"}}>
          <MoviesList movies={results}></MoviesList>
        </div>
      ) : (
        <div
          className="alert alert-warning"
          role="alert"
          style={{ marginTop: "3rem",textAlign: "center"  }}
        >
          <span role="img" aria-label= "sadface" >😥No movies found 😥🙁</span>
        </div>
      )}
    </div>
  );
};

export default App;

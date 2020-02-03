import * as React from "react";
import Movie from "./Movie";

export default class MoviesList extends React.Component<{
  movies: { Title: ""; imdbID: ""; Year: ""; Poster: "" }[];
}> {
  render() {
    return this.props.movies.map(movie => {
      return (
        <div key={movie.imdbID} className="col-6">
          <Movie title={movie.Title} year={movie.Year} poster={movie.Poster} />
        </div>
      );
    });
  }
}

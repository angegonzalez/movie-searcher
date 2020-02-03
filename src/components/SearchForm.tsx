import React, { Component } from "react";
import "../styles/SearchForm.css";

const API_KEY = "d2688f2f";

var searchBar = [
  "Busca una pelicula",
  "Accion",
  "Comedia",
  "Drama",
  "Movie Searcher"
];

export default class SearchForm extends Component<
  { onResults: (results: []) => void },
  { title: string; inputMovie: string }
> {
  state = {
    title: "",
    inputMovie: ""
  };

  componentDidMount() {
    this.write(searchBar[0]).then(() =>
      this.write(searchBar[1]).then(() => {
        this.write(searchBar[2]).then(() =>
          this.write(searchBar[3]).then(() => this.write(searchBar[4]))
        );
      })
    );
  }

  writeTitle(cadena: string) {
    var i = 0;
    const promise = new Promise((resolve, reject) => {
      var write = setInterval(() => {
        this.setState({ title: cadena.substring(0, i) + "|" });
        i++;
        if (i === cadena.length + 1) {
          clearInterval(write);
          this.setState({ title: cadena });
          resolve(cadena);
        }
      }, 150);
    });
    return promise;
  }
  write = async (cadena: string) => {
    try {
      await this.writeTitle(cadena);
    } catch (err) {
      return console.log(err.message);
    }
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputMovie: e.target.value });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputMovie = this.state.inputMovie;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {  
        const search= results.Search;
        console.log(search);
        this.props.onResults(search);
      });
  };

  render() {
    return (
      <div className="search-card">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          {this.state.title === searchBar[searchBar.length - 1] ? (
            <h3 className="font-weight-bold">{this.state.title}</h3>
          ) : (
            <h3 className="font-weight-light">{this.state.title}</h3>
          )}

          <input
            className="form-control col-lg-4 col-sm-12 mr-3"
            type="search"
            placeholder="Search movies"
            aria-label="Search"
            onChange={this.handleChange}
          />

          <button className="btn btn-outline-light my-2 my-sm-7" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

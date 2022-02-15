import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import Loading from '../../components/Loading/Loading';
import * as movieAPI from '../../services/movieAPI';
import './movieList.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then(
      (films) => this.setState({ movies: films }),
    );
  }

  render() {
    const { movies } = this.state;
    const loadingComponent = <Loading />;

    // Render Loading here if the request is still happening

    return (
      <section className="movie-list-section">
        <header className="movie-list-header">
          <Link className="movie-list-link" to="/movies/new">ADICIONAR CARTÃO</Link>
        </header>
        <div className="movie-list-section" data-testid="movie-list">
          {movies.length === 0 ? loadingComponent : movies
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </section>
    );
  }
}

export default MovieList;

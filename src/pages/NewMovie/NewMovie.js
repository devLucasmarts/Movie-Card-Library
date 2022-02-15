import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../../components/MovieForm/MovieForm';
import * as movieAPI from '../../services/movieAPI';
import './newMovie.css';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      shouldRedirect: false,
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(
      () => this.setState({ shouldRedirect: true }),
    );
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="new-movie-section" data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;

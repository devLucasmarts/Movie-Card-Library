import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './movieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div className="card" data-testid="movie-card">
        <img className="image-card" src={ imagePath } alt="card-img" />
        <p className="card-title">{title}</p>
        <p className="card-storyline">{storyline}</p>
        <Link className="card-link" to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;

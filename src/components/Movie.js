import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link to={{
      pathname: "/movie-detail",
      state: {
        year,
        title,
        summary,
        poster,
        genres
      }
    }}> {/* 모든 props를 movie-detail 페이지에 전달 */}
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                  {genres.map((genre, index) => (
                      <li key={index} className="genres__genre">{genre}</li>
                  ))}</ul>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}
// component가 state가 필요없을 경우에는 이게 class component가 될 필요는 없다.
// map에 있는 각각의 item은 key가 필요하다. but, id가 없어서 key로 지정할 수 없다.
// -> map function 자체에서 item과 item number(index) argument를 제공해준다.

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
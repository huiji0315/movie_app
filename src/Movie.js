import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster }) {
    return <h4>{ title }</h4>
}
// component가 state가 필요없을 경우에는 이게 class component가 될 필요는 없다.

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;
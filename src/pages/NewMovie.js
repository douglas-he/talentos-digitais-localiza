import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { history } = this.props;
    movieAPI.createMovie(newMovie)
      .then(() => history.push('/'));
  }

  render() {
    return (
      <MovieForm onSubmit={this.handleSubmit} />
    );
  }
}
export default NewMovie;
NewMovie.propTypes = PropTypes.shape({
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}).isRequired;

import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './search_form';
import { searchRestaurants } from '../../actions/restaurant_actions';

import { openModal, closeModal } from '../../actions/modal_actions';


const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  searchRestaurants: (searchTerms) =>
    dispatch(searchRestaurants(searchTerms)),
});

export default connect (
  null,
  mapDispatchToProps
)(SearchForm);

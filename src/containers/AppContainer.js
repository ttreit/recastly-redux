import { connect } from 'react-redux';
import App from './../components/App.js';
import handleVideoSearch from '../actions/search.js';

var mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => {
      dispatch(handleVideoSearch(q));
    }
  };
};

var AppContainer = connect(null, mapDispatchToProps)(App);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default AppContainer;
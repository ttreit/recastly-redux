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

export default AppContainer;
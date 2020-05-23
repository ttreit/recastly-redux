import { connect } from 'react-redux';
import autoplayButton from './../components/Autoplay.js';
import toggleAutoplay from './../actions/autoplay.js';

var mapDispatchToProps = (dipatch) => {
  return {
    handleAutoplayUpdate: () => {
      dispatch(toggleAutoplay());
    }
  };
};

var mapStateToProps = (state) => {
  return {
    autoplayStatus: state.autoplay
  };
};

var autoplayContainer = connect(mapStateToProps, mapDispatchToProps)(autoplayButton);

export default autoplayContainer;

// You must pass a component to the function returned by connect. Instead received {}

//rename to autoplaycontainer
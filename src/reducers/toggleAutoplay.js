import Redux from 'redux';

var toggleAutoplayReducer = (state = 0, action) => {
  switch (action.type) {
  case 'TOGGLE_AUTOPLAY':
    return state === 0 ? 1 : 0;
  default:
    return state;
  }
};

export default toggleAutoplayReducer;

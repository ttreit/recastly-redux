import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  console.log('state: ', state, 'action: ', action);

  switch (action.type) {
  case 'CHANGE_VIDEO':
    if (action.video === undefined) {
      return null;
    }
    return action.video;
  default:
    return state;

  }

};

export default currentVideoReducer;

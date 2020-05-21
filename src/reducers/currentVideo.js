import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  console.log('state: ', state, 'action: ', action);

  switch (action.type) {
  //case 'CHANGE_VIDEO_LIST':
    //return action.videos;
  case 'CHANGE_VIDEO':
    if (action.video === undefined) {
      return null;
    }
    return action.video;
  default:
    return state;

  }

  //TODO: define a reducer for the currentVideo field of our state.

};

export default currentVideoReducer;

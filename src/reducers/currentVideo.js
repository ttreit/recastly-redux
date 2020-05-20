import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {

  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return state = action.videos[0];
    case 'CHANGE_VIDEO':
      return state = action.video;
    default:
      return state;

  }

  //TODO: define a reducer for the currentVideo field of our state.

};

export default currentVideoReducer;

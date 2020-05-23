import Redux from 'redux';

var videoListReducer = (state = [], action) => {

  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    if (action.videos === undefined) {
      return [];
    }
    return action.videos;
  default:
    return state;
  }
};

export default videoListReducer;

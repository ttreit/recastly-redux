import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import toggleAutoplay from './toggleAutoplay.js';


var rootReducer = combineReducers({
  currentVideo: currentVideo,
  videoList: videoList,
  autoplay: toggleAutoplay
});

export default rootReducer;



import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  };
  return (dispatch) => {
    
    //Call the searchyoutube function and pass in options object and the callback
    //options includes API key and query string (and max)
    //callback dispatch function that sends the action object with the returned videos as the payload
    searchYouTube(options, (results) => {
      dispatch(changeVideo(results[0]));
      dispatch(changeVideoList(results));
    }
    );
  };
};

export default handleVideoSearch;






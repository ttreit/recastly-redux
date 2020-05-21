import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

var mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => {
      dispatch(changeVideo(video));
    }
  };
};

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);


//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;

/*
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))
  }
}
*/
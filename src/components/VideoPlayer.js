import React from 'react';
import autoplayContainer from '../containers/Autoplay.js';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      !video
        ? <div className="video-player">Please wait...</div>
        : <div className="video-player">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} allow="autoplay" allowFullScreen></iframe>
          </div>
          <div>
            <autoplayContainer />
          </div>
          <div className="video-player-details">
            <h3>{this.props.video.snippet.title}</h3>
            <div>{this.props.video.snippet.description}</div>
          </div>
        </div>
    );

  }
}

// var VideoPlayer = ({video}) => (
//   !video
//     ? <div className="video-player">Please wait...</div>
//     : <div className="video-player">
//       <div className="embed-responsive embed-responsive-16by9">
//         <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allow="autoplay" allowFullScreen></iframe>
//       </div>
//       <div>
//         <autoplayContainer />
//       </div>
//       <div className="video-player-details">
//         <h3>{video.snippet.title}</h3>
//         <div>{video.snippet.description}</div>
//       </div>
//     </div>
// );

// VideoPlayer.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

// export default VideoPlayer;

//?autoplay=1&mute=1&enablejsapi=1
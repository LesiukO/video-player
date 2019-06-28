import React from 'react';
import './Video.css';

class Video extends React.Component {
  render() {
    return (
      <div>
        <video controls autostart autoPlay muted src={this.props.src} />
      </div>
    );
  }
}

export default Video;

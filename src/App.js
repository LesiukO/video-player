import React from 'react';
import Video from './components/Video';
import Menu from './components/Menu';
import './App.css';
import { VIDEOS } from './videos';


class App extends React.Component {
  constructor(props) {
    super(props);
		this.chooseVideo = this.chooseVideo.bind(this);
    this.state = { src: VIDEOS.fast };
  }

  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default App;

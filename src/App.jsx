import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/';
import Portada from './components/portada/';
import ListCarousel from './components/list-carousel/';
import Video from './components/video/';

import 'bulma/css/bulma.css';
import 'animate.css/animate.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {videoIsActive: false, src:require('./assets/videos/1.mp4')};
    this.closeVideo = this.closeVideo.bind(this);
    this.openVideo = this.openVideo.bind(this);
  }
  closeVideo(){
    this.setState({isActive: false});
  }
  openVideo(srcVideo){
    // let video = srcVideo !== null ? srcVideo : ;
    this.setState({src: require('./assets/videos/1.mp4'), isActive: true});
  }
  render() {
    let {isActive, src} = this.state;
    return (
      <div className="application">
      	<Navbar/>
      	<Portada/>
        <Video closeVideo={this.closeVideo} src={src} isActive={isActive}></Video>
      	<div className="lautiflix__container">
          <ListCarousel openVideo={this.openVideo} idScroll="id2190218" title="Mi lista"></ListCarousel><br/>
          <ListCarousel openVideo={this.openVideo} idScroll="id2190216" title="Más populares"></ListCarousel><br/>
  		</div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
class Video extends React.Component{
  componentDidMount(){
    const {closeVideo,isActive} = this.props;
    document.addEventListener('keyup',event=>{
      if(event.keyCode == 27){
        closeVideo();
      }
    });
  }
  render(){
    let {isActive, src, closeVideo} = this.props;
    return (
      <div>
        {isActive ? (
          <div>
            <div className="VideoComponentDoYouWontClose">
              <button className="button is-white is-outlined" onClick={closeVideo}>Cerrar</button>
            </div>
            <div className="VideoComponent">
              <div className="videoComponentContainer">
                <video controls className={isActive ? 'isActive' : ''}>
                  <source src={src} type="video/mp4"/>
                </video>
              </div>
            </div>
          </div>) : (null)}
      </div>
    );
  }
}
Video.propTypes = {
  src: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  closeVideo: PropTypes.func.isRequired
};
export default Video;

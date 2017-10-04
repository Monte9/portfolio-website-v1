import React, { Component } from 'react';

import ParkMercedLiveImage from '../../images/park-merced-live.png'

export default class ParkMercedLive extends Component {
  render() {
    return (
      <div className="ModalFrame">
        <div className="ModalScroll">
          <div className="ModalContainer">
            <p className="ModalTitle">ParkMerced.Live</p>
            <p className="IntroAbout">19th Ave & Karl The Fog - SF Live Stream</p>
            <div className="ModalImageContainer">
              <img className="ModalImage NoSelection" src={ParkMercedLiveImage} alt="React Native Radio" />
            </div>
            <div className="ModalSection">
              <p className="ModalTitle2">Motivation</p>
              <p className="IntroAbout">My apartment is on the 12th floor in Park Merced overlooking 19th Ave. The view is not bad, so I setup my RPi to live stream the view 24/7.</p>
            </div>
            <div className="ModalSection">
              <p className="ModalTitle2">Technologies</p>
              <a href="https://www.raspberrypi.org/documentation/usage/camera/README.md" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• Raspberry Pi + Pi Camera</p>
              </a>
              <a href="https://reactjs.org/" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• React</p>
              </a>
              <a href="https://www.wunderground.com/weather/api/" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• Wunderground Weather API</p>
              </a>
              <a href="https://newsapi.org/" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• News API</p>
              </a>
              <a href="https://blog.alexellis.io/live-stream-with-docker/" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• Docker Image (To livestream to Youtube)</p>
              </a>
              <a href="https://blog.alexellis.io/live-stream-with-docker/" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• React Youtube</p>
              </a>
              <a href="https://www.netlify.com/" target="_blank" className="TechLinks" rel="noopener noreferrer">
                <p className="TechLinks">• Netlify</p>
              </a>
            </div>
            <div className="ModalSection">
              <p className="ModalTitle2">Check It Out</p>
              <div className="DetailButtonContainer">
                <a href="http://parkmerced.live/" target="_blank" className="LinkText NoSelection"
                  rel="noopener noreferrer">
                  <div className="DetailButton">Website</div>
                </a>
                <a href="https://github.com/Monte9/parkmerced.live" target="_blank" className="LinkText NoSelection"
                  rel="noopener noreferrer">
                  <div className="DetailButton">Code</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

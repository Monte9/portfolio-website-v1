import React, { Component } from 'react';

import SurpriseMeImage from '../../images/surprise-me.png'

export default class SurpriseMe extends Component {
  render() {
    return (
      <div className="ModalFrame">
        <div className="ModalScroll">
          <div className="ModalContainer">
            <p className="ModalTitle">Surprise Me</p>
            <p className="IntroAbout">Having a slow day at work?</p>
            <p className="IntroAbout">Suprise yourself with a cute gif, a fun fact or some delicious food near your office.</p>
            <div className="ModalImageContainer">
              <img className="ModalImage NoSelection" src={SurpriseMeImage} alt="React Native Radio" />
            </div>
            <div className="ModalSection">
              <p className="ModalTitle2">Motivation</p>
              <p className="IntroAbout">Bored at work one day, I decided to built a Slack Bot that could surprise me on-demand.</p>
            </div>
            <div className="ModalSection">
              <p className="ModalTitle2">Technologies</p>
              <a href="https://stdlib.com/" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• StdLib</p>
              </a>
              <a href="https://api.slack.com/" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• Slack API</p>
              </a>
            </div>
            <div className="ModalSection">
              <p className="ModalTitle2">Check It Out</p>
              <div className="DetailButtonContainer">
                <a href="https://monte9.lib.id/surprise-me@dev/" target="_blank" className="LinkText NoSelection"
                  rel="noopener noreferrer">
                  <div className="DetailButton">Website</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

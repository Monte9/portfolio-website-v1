import React, { Component } from 'react';

import NatureXplorerImage from '../../images/natureXplorer.png'

export default class NatureXplorer extends Component {
  render() {
    return (
      <div className= "ModalFrame">
        <div className="ModalScroll">
          <div className="ModalContainer">
            <p className="ModalTitle">NatureXplorer</p>
            <p className="IntroAbout">Experience nature's endless beauty!</p>
            <div className="ModalImageContainer">
              <img className="ModalImage NoSelection" src={NatureXplorerImage} alt="React Native Radio" />
            </div>
            <div className="ModalSection">
              <p className="ModalTitle2">Motivation</p>
              <p className="IntroAbout">Website for viewing amazing nature wallpapers from various Reddit subs all in one place.</p>
            </div>
            <div className="ModalSection">
              <p className="ModalTitle2">Technologies</p>
              <a href="https://www.reddit.com/dev/api/" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• Reddit API</p>
              </a>
              <a href="https://reactjs.org/" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• React</p>
              </a>
              <a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• React Router Dom</p>
              </a>
              <a href="https://github.com/RRutsche/react-parallax" target="_blank" className="LinkText" rel="noopener noreferrer">
                <p className="TechLinks">• React Parallax</p>
              </a>
              <a href="https://www.netlify.com/" target="_blank" className="TechLinks" rel="noopener noreferrer">
                <p className="TechLinks">• Netlify</p>
              </a>
            </div>
            <div className="ModalSection">
              <p className="ModalTitle2">Check It Out</p>
              <div className="DetailButtonContainer">
                <a href="https://naturexplorer.netlify.com/" target="_blank" className="LinkText NoSelection"
                  rel="noopener noreferrer">
                  <div className="DetailButton">Website</div>
                </a>
                <a href="https://github.com/Monte9/naturexplorer" target="_blank" className="LinkText NoSelection"
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

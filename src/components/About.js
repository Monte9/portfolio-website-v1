import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import AppContainer from './AppContainer'

import '../styles/App.css';

import TwitterLogo from '../images/twitter.png'
import GithubLogo from '../images/github.png'
import GmailLogo from '../images/gmail.png'

export default class About extends Component {
  render() {
    return (
      <AppContainer>
        <div className="About">
          <div className="AboutLeftContainer">
            <div className="ProfileImageContainer">
              <img
                className="ProfileImage"
                src="https://avatars0.githubusercontent.com/u/7840686?v=4&s=460"
              />
            </div>
            <div className="LogosImageContainer">
              <div className="LogosImageRow">
                <img
                  className="Logo"
                  src={TwitterLogo}
                />
                <img
                  className="Logo"
                  src={GithubLogo}
                />
              </div>
              <img
                className="Logo"
                src={GmailLogo}
              />
            </div>
          </div>
          <div className="AboutRightContainer">
            <p className="IntroHello">About me</p>
            <p className="AboutText">Young, independent and ambitious software engineer looking to work on challenging technical problems with a passion for developing mobile apps.</p>
            <p className="AboutText">Willing to learn new technologies with an entrepreneurial spirit to innovate around new ideas.</p>
          </div>
        </div>
      </AppContainer>
    );
  }
}

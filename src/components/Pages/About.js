import React, { Component } from 'react';

import AppContainer from '../AppContainer'

import '../../styles/App.css';

import TwitterLogo from '../../images/twitter.png'
import GithubLogo from '../../images/github.png'
import GmailLogo from '../../images/gmail.png'

export default class About extends Component {
  render() {
    return (
      <AppContainer>
        <div className="About">
          <div className="AboutLeftContainer">
            <div className="ProfileImageContainer NoSelection">
              <img
                className="ProfileImage"
                src="https://avatars0.githubusercontent.com/u/7840686?v=4&s=460"
                alt="Monte Thakkar"
              />
            </div>
            <div className="LogosImageContainer NoSelection NoMobileHighlight">
              <div className="LogosImageRow">
                <a href="https://twitter.com/mthakkar_" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={TwitterLogo}
                    alt="Twitter Logo"
                  />
                </a>
                <a href="https://github.com/Monte9" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={GithubLogo}
                    alt="Github Logo"
                  />
                </a>
                <a href="mailto:manthan.thakkar@gmail.com?Subject=Hi%20Monte!" target="_top">
                  <img className="Logo"
                    src={GmailLogo}
                    alt="Gmail Logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="AboutRightContainer">
            <p className="IntroHello">About me</p>
            <p className="AboutText"><span className="Bold">tldr;</span> Young, independent and ambitious software engineer looking to work on challenging technical problems and innovate around new ideas with an entrepreneurial spirit.</p>
            <p className="AboutText">-----</p>
            <p className="AboutText">I was born and raised in Bangalore, India and moved to the Bay Area in 2012 to pursue an undergrad degree in CS.
              During my junior & senior year in college, I attended over a couple dozen hackathons and worked on a whole range of web and mobile projects, learning several different technologies in the process such as rails, express, swift, java, parse, firebase, javascript and realm.
              Working in a team setting (often with people I just met at the hackathon), I developed an interest for communicating and implementing big lofty ideas using technology.
            </p>
            <p className="AboutText">
              Besides tech, I am also really passionate about teaching and take any oppurtunity I get to help mentor junior developers and share my technical expertise with them. In this spirit, I founded MobileSpace; a weekly meetup to teach iOS development at SF State. You can read more about it
              <a href="https://medium.com/@mthakkar_/mobilespace-a-passion-story-9dbc8afd5221" target="_Blank" className="LinkText" rel="noopener noreferrer"> here</a>.
            </p>
            <p className="AboutText">
              Over the past year, I have been actively working on several side-projects using React and React Native and also experimenting with GraphQL, Slack Bot and Raspberry Pi.
              As a means to transition from these technologies into more exciting and challenging ones, I built this (portfolio) website from scratch in React, to serve as a showcase of my current and future work.
              This website is heavily influenced by <a href="https://sebastiandobrincu.com/" target="_Blank" className="LinkText" rel="noopener noreferrer">Sebastian Dobrincu's website</a> with an emphasis on building a beautiful, functional and production-ready website.
            </p>
            <p className="AboutText">
              Looking ahead, I am excited to be exploring ReactVR, Solidity and Truffle (Blockchain tech). I'll be sure to update this website once I start working on some interesting ideas in this space and also write blog posts on my <a href="https://medium.com/@mthakkar_" target="_Blank" className="LinkText" rel="noopener noreferrer">Medium</a> to share my learnings along the way.
            </p>
            <p className="AboutText">
              Lastly, I really enjoy meeting new people and having a casual convo over <span role="img" aria-label="Coffee">☕</span> <a href="https://twitter.com/MThakkar_" target="_Blank" className="LinkText" rel="noopener noreferrer">hmu</a>
            </p>
          </div>
        </div>
      </AppContainer>
    );
  }
}

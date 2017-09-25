import React, { Component } from 'react';

import AppContainer from '../AppContainer'
import YoutubePlayer from '../Shared/YoutubePlayer'
import MentionsLeadershipRow from '../Rows/MentionsLeadershipRow'

import MobileSpaceImage from '../../images/mobilespace.png'

export default class MentionsLeadership extends Component {
  render() {
    return (
      <AppContainer>
        <div className="ShortIntro">
          <p className="IntroAbout DetailPageIntro">I try to put myself out there, to share and learn.</p>
          <p className="IntroHello DetailPageTitle">Mentions<span role="img" aria-label="Studio Microphone">🎙️</span></p>
        </div>
        <div className="DetailGrid">
          <MentionsLeadershipRow imgSrc={<YoutubePlayer />}
            imgAltText="Pillow About Us"
            title="Pillow Culture"
            date="April 4th, 2017"
            subtitle="Excited to be featured in the Pillow: About Us video."
            websiteLink="https://www.pillow.com/"
          />
        </div>
        <p className="IntroHello DetailPageTitle">Leadership<span role="img" aria-label="Studio Microphone">🕴️</span></p>
        <div className="DetailGrid">
          <MentionsLeadershipRow
            imgSrc={<img className="MentionsImage NoSelection" src={MobileSpaceImage} alt="MobileSpace - Weekly meetup in San Francisco" />}
            imgAltText="MobileSpace"
            title="MobileSpace"
            date="August 2016 - Present"
            position="Co-founder"
            subtitle="A weekly meetup in San Francisco to enable developers to build their own mobile apps with an excellent in-person community to teach and help accelerate your project to completion."
            websiteLink="http://mobilespace.xyz/"
          />
        </div>
      </AppContainer>
    );
  }
}

import React, { Component } from 'react';

import AppContainer from '../AppContainer'
import YoutubePlayer from '../Shared/YoutubePlayer'
import MentionsLeadershipRow from '../Rows/MentionsLeadershipRow'

import MobileSpace from '../../images/mobilespace.png'
import ReactNativeRadio from '../../images/react-native-radio.png'

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
            title="Pillow"
            date="April 4th, 2017"
            subtitle="Featured in the Pillow About us video. Keep an 👀 out starting @1:20"
            websiteLink="https://www.pillow.com/"
          />
          <MentionsLeadershipRow
            imgSrc={<img className="MentionsImage NoSelection" src={ReactNativeRadio} alt="React Native Radio" />}
            title="React Native Radio Podcast"
            date="June 28th, 2017"
            subtitle="As a guest on the podcast, I got a chance to talk about how I got started in programming and about my experience maintaining React Native Elements. We also talked at length about Sustainable Open Source and how we use Open Collective in order to support open source contributors."
            buttonLabel="Listen"
            websiteLink="https://itunes.apple.com/us/podcast/67-react-native-elements-sustainable-open-source-featuring/id1058647602?i=1000389293611&mt=2"
            code
            codeLink="https://github.com/react-native-training/react-native-elements"
          />
        </div>
        <p className="IntroHello DetailPageTitle">Leadership<span role="img" aria-label="Studio Microphone">🕴️</span></p>
        <div className="DetailGrid">
          <MentionsLeadershipRow
            imgSrc={<img className="MentionsImage NoSelection" src={MobileSpace} alt="MobileSpace - Weekly meetup in San Francisco" />}
            imgAltText="MobileSpace"
            title="MobileSpace"
            date="August 2016 - Present"
            position="Co-founder"
            subtitle="A weekly meetup in San Francisco to enable developers to build their own mobile apps with an excellent in-person community to teach and help accelerate your project to completion."
            websiteLink="http://mobilespace.xyz/"
            blog
            blogLink="http://mobilespace.xyz/blog/Wrap-up"
          />
        </div>
      </AppContainer>
    );
  }
}

import React, { Component } from 'react';

import AppContainer from '../AppContainer'
import OpenSourceRow from '../Rows/OpenSourceRow'

import ReactNativeElements from '../../images/react-native-elements.png'
import ReactNativeRatings from '../../images/react-native-ratings.png'
import ReactNativeParallaxScrollview from '../../images/react-native-parallax-scrollview.png'

export default class OpenSourceProjects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <AppContainer>
        <div className="ShortIntro">
          <p className="IntroAbout DetailPageIntro">I do open source.</p>
          <p className="IntroHello DetailPageTitle">Open Source Projects <span role="img" aria-label="Package">📦</span></p>
        </div>
        <div className="DetailGrid">
          <OpenSourceRow imgSrc={ReactNativeElements}
            imgAltText="React Native Elements"
            title="React Native Elements"
            stars="7328"
            subtitle="Cross Platform React Native UI Toolkit by Nader Dabit & Monte Thakkar"
            demoLink="https://expo.io/@monte9/react-native-elements-app"
            codeLink="https://github.com/react-native-training/react-native-elements"
          />
          <div className="Divider FullWidth" />
          <OpenSourceRow imgSrc={ReactNativeRatings}
            imgAltText="React Native Ratings"
            title="React Native Ratings"
            stars="180"
            subtitle="An extendable Rating's components for React Native with gestures and an intuitive API"
            demoLink="https://github.com/Monte9/react-native-ratings#demo"
            codeLink="https://github.com/Monte9/react-native-ratings"
          />
          <div className="Divider FullWidth" />
          <OpenSourceRow imgSrc={ReactNativeParallaxScrollview}
            imgAltText="React Native Parallax Scrollview"
            title="React Native Parallax Scrollview"
            stars="134"
            subtitle="The Parallax ScrollView component we all deserve"
            demoLink="https://github.com/Monte9/react-native-parallax-scrollview#demo"
            codeLink="https://github.com/Monte9/react-native-parallax-scrollview"
          />
        </div>
      </AppContainer>
    );
  }
}

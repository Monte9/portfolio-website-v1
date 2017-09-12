import React, { Component } from 'react';

import AppContainer from './AppContainer'
import '../styles/App.css';

import BlogTesting from '../images/blog-testing.png'
import BlogBlockchain from '../images/blog-blockchain.png'
import BlogBitrise from '../images/blog-bitrise.png'

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <div className="Body">
          <div className="ShortIntro">
            <p className="IntroHello">Hello world!! <span role="img" aria-label="Dancing Woman">💃</span></p>
            <p className="IntroAbout">I'm a Software Engineer currently living in San Francisco. I work full-time at Pillow, a technology-driven hospitality company that helps short-term rentals work for everyone.</p>
            <p className="IntroAbout">In my free time I like to roller skate at the pier, listen to audiobooks and work on side projects. Find out more about me here.</p>
          </div>
          <div className="GridContainer">
            <div className="GridRow">
              <div className="GridBox">
                <div className="BoxImage">
                </div>
                <div className="BoxLabel">Mobile</div>
              </div>
              <div className="GridBox">
                <div className="BoxImage">
                </div>
                <div className="BoxLabel">Web</div>
              </div>
              <div className="GridBox">
                <div className="BoxImage">
                </div>
                <div className="BoxLabel">VR</div>
              </div>
            </div>
            <div className="GridRow2">
              <div className="GridBox">
                <div className="BoxImage">
                </div>
                <div className="BoxLabel">Mobile</div>
              </div>
              <div className="GridBox">
                <div className="BoxImage">
                </div>
                <div className="BoxLabel">Web</div>
              </div>
            </div>
            <div className="GridRow2">
              <div className="GridBox">
                <div className="BoxImage">
                </div>
                <div className="BoxLabel">VR</div>
              </div>
              <div className="GridBox">
                <div className="BoxImage">
                </div>
                <div className="BoxLabel">Hardware</div>
              </div>
            </div>
            <div className="GridRow">
              <div className="GridBox">
                <div className="BoxImage">
                </div>
                <div className="BoxLabel">Hardware</div>
              </div>
              <div className="GridBox">
                <div className="BoxImage">
                </div>
                <div className="BoxLabel">Mentions</div>
              </div>
              <div className="GridBox">
                <div className="BoxImage">
                </div>
                <div className="BoxLabel">Leadership</div>
              </div>
            </div>
          </div>
          <div className="GridRow2">
            <div className="GridBox">
              <div className="BoxImage">
              </div>
              <div className="BoxLabel">Mentions</div>
            </div>
            <div className="GridBox">
              <div className="BoxImage">
              </div>
              <div className="BoxLabel">Leadership</div>
            </div>
          </div>
          <div className="Divider" />
          <div className="BlogPosts">
            <p className="BlogPostsLabel">Latest Blog Posts</p>
            <div className="GridContainer">
              <div className="GridRowBlog">
                <div className="GridRectangle">
                  <a href="https://pillow.codes/testing-in-react-native-jest-detox-d7b3b79a166a" className="BlogLink">
                    <img className="RectangleImage"
                      src={BlogTesting}
                      alt="Blog Post - Testing in React Native"
                    />
                    <div className="BoxLabel">Testing in React Native - Jest + Detox + Bitrise</div>
                  </a>
                </div>
                <div className="GridRectangle">
                  <a href="https://medium.com/@mthakkar_/blockchain-technology-whats-all-the-hype-about-5f3b3b454163" className="BlogLink">
                    <img className="RectangleImage"
                      src={BlogBlockchain}
                      alt="Blog Post - Blockchain technology"
                    />
                    <div className="BoxLabel">Blockchain technology - What’s all the hype about?</div>
                  </a>
                </div>
                <div className="GridRectangle">
                  <a href="https://pillow.codes/bitrise-codepush-react-native-ideal-mobile-ci-setup-6283b86146c" className="BlogLink">
                    <img className="RectangleImage"
                      src={BlogBitrise}
                      alt="Blog Post - Blockchain technology"
                    />
                    <div className="BoxLabel">Bitrise + CodePush + React Native = Ideal Mobile CI Setup?</div>
                  </a>
                </div>
              </div>
              <div className="GridRowBlog2">
                <div className="GridRectangle">
                  <a href="https://pillow.codes/testing-in-react-native-jest-detox-d7b3b79a166a" className="BlogLink">
                    <img className="RectangleImage"
                      src={BlogTesting}
                      alt="Blog Post - Testing in React Native"
                    />
                    <div className="BoxLabel">Testing in React Native - Jest + Detox + Bitrise</div>
                  </a>
                </div>
                <div className="GridRectangle">
                  <a href="https://medium.com/@mthakkar_/blockchain-technology-whats-all-the-hype-about-5f3b3b454163" className="BlogLink">
                    <img className="RectangleImage"
                      src={BlogBlockchain}
                      alt="Blog Post - Blockchain technology"
                    />
                    <div className="BoxLabel">Blockchain technology - What’s all the hype about?</div>
                  </a>
                </div>
              </div>
              <div className="GridRowBlog2">
                <div className="GridRectangle">
                  <a href="https://pillow.codes/bitrise-codepush-react-native-ideal-mobile-ci-setup-6283b86146c" className="BlogLink">
                    <img className="RectangleImage"
                      src={BlogBitrise}
                      alt="Blog Post - Blockchain technology"
                    />
                    <div className="BoxLabel">Bitrise + CodePush + React Native = Ideal Mobile CI Setup?</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    );
  }
}

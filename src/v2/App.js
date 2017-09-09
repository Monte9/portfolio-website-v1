import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <div className="MobileNavBar">
            <p className="NavHeaderLink">PORTFOLIO</p>
            <p className="NavHeaderLink">ABOUT</p>
          </div>
          <hr className="MobileDivider" />
          <div className="Header">
            <div className="IntroHeader">
              <p className="NameLabel">MONTE THAKKAR</p>
              <p className="AboutLabel">Software Engineer. Living in the present.</p>
              <p className="AboutLabelSecond">Dreaming of going to Mars.</p>
            </div>
            <div className="NavHeader">
              <p className="NavHeaderLink">PORTFOLIO</p>
              <p className="NavHeaderLink">ABOUT</p>
            </div>
          </div>
          <div className="Divider" />
          <div className="Body">
            <div className="ShortIntro">
              <p className="IntroHello">Hello world!! <span role="img">💃</span></p>
              <p className="IntroAbout">I'm a Software Engineer currently living in San Francisco. I work full-time at Pillow, a technology-driven hospitality company that helps short-term rentals work for everyone.</p>
              <p className="IntroAbout">In my free time I like to roller skate at the pier, listen to audiobooks and work on side projects. Find out more about me here.</p>
            </div>
            <div className="GridContainer">
              <div className="GridRow">
                <div className="GridBox">
                  <div className="BoxImage">
                  </div>
                  <div className="BoxLabel">Side Projects</div>
                </div>
                <div className="GridBox">
                  <div className="BoxImage">
                  </div>
                  <div className="BoxLabel">Mentions</div>
                </div>
                <div className="GridBox">
                  <div className="BoxImage">
                  </div>
                  <div className="BoxLabel">Open Source Projects</div>
                </div>
              </div>
              <div className="GridRow">
                <div className="GridBox">
                  <div className="BoxImage">
                  </div>
                  <div className="BoxLabel">Side Projects</div>
                </div>
                <div className="GridBox">
                  <div className="BoxImage">
                  </div>
                  <div className="BoxLabel">Side Projects</div>
                </div>
                <div className="GridBox">
                  <div className="BoxImage">
                  </div>
                  <div className="BoxLabel">Side Projects</div>
                </div>
              </div>
            </div>
            <div className="Divider" />
            <div className="BlogPosts">
              <p className="BlogPostsLabel">Latest Blog Posts</p>
              <div className="GridContainer">
                <div className="GridRowBlog">
                  <div className="GridBox">
                    <div className="RectangleImage">
                    </div>
                    <div className="BoxLabel">Blog Post 1</div>
                  </div>
                  <div className="GridBox">
                    <div className="RectangleImage">
                    </div>
                    <div className="BoxLabel">Blog Post 2</div>
                  </div>
                  <div className="GridBox">
                    <div className="RectangleImage">
                    </div>
                    <div className="BoxLabel">Blog Post 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

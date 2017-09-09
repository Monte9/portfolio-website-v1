import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import AppContainer from './AppContainer'

import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <AppContainer>
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
                  <div className="RectangleImage">
                  </div>
                  <div className="BoxLabel">Blog Post 1</div>
                </div>
                <div className="GridRectangle">
                  <div className="RectangleImage">
                  </div>
                  <div className="BoxLabel">Blog Post 2</div>
                </div>
                <div className="GridRectangle">
                  <div className="RectangleImage">
                  </div>
                  <div className="BoxLabel">Blog Post 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    );
  }
}

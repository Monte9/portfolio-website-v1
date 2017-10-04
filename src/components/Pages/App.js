import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

import AppContainer from '../AppContainer'

// Cards
import PageCard from '../Cards/PageCard'
import ModalCard from '../Cards/ModalCard'
import BlogCard from '../Cards/BlogCard'

// Modal Pages
import NatureXplorer from '../Modals/NatureXplorer'
import ParkMercedLive from '../Modals/ParkMercedLive'
import SurpriseMe from '../Modals/SurpriseMe'

import '../../styles/App.css';

// Card Images
import OpenSourceProjects from '../../images/open-source-projects.png'
import MentionsLeadership from '../../images/mentions-leadership.png'
import Quotes from '../../images/quotes.png'

// Blog Images
import BlogTesting from '../../images/blog-testing.png'
import BlogBlockchain from '../../images/blog-blockchain.png'
import BlogBitrise from '../../images/blog-bitrise.png'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      modal: null
    };
  }

  handleOpenModal(modalComponent) {
    this.setState({
      showModal: true,
      modal: modalComponent
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
      modal: null
    });
  }

  render() {
    return (
      <AppContainer>
        <div className="Body">
          <div className="ShortIntro">
            <p className="IntroHello">Hello world!! <span role="img" aria-label="Dancing Woman">💃</span></p>
            <p className="IntroAbout">I'm a Software Engineer currently living in San Francisco. I work full-time at <a href="https://www.pillow.com/" className="LinkText" target="_blank" rel="noopener noreferrer">Pillow</a>. I enjoy turning ideas into products using React, Rails, Node.js and React Native.</p>
            <p className="IntroAbout">Currently exploring the Blockchain space, as an investor and a developer. In my free time I like to roller skate at the pier, listen to audiobooks and go outside my comfort zone. Check out some of my latest work on my Github <a href="https://github.com/Monte9" target="_blank" className="LinkText" rel="noopener noreferrer">here</a> or find out more about me <Link to="/about" className="LinkText">here</Link>.</p>
          </div>
          <div className="GridContainer">
            <div className="GridRow">
              <PageCard link="/open-source-projects"
                imageSrc={OpenSourceProjects}
                imageAltText="Open Source Projects"
                label="Open Source Projects"
              />
              <PageCard link="/mentions-leadership"
                imageSrc={MentionsLeadership}
                imageAltText="Mentions and Leadership"
                label="Mentions & Leadership"
              />
              <PageCard link="/quotes"
                imageSrc={Quotes}
                imageAltText="Quotes"
                label="Quotes"
              />
            </div>
            <div className="GridRow">
              <ModalCard label="NatureXplorer"
                action={() => this.handleOpenModal(<NatureXplorer />)}
              />
              <ModalCard label="Parkmerced.live"
                action={() => this.handleOpenModal(<ParkMercedLive />)}
              />
              <ModalCard label="Surprise Me"
                action={() => this.handleOpenModal(<SurpriseMe />)}
              />
            </div>
            <div className="GridRow2">
              <PageCard link="/open-source-projects"
                imageSrc={OpenSourceProjects}
                imageAltText="Open Source Projects"
                label="Open Source Projects"
              />
              <PageCard link="/mentions-leadership"
                imageSrc={MentionsLeadership}
                imageAltText="Mentions and Leadership"
                label="Mentions & Leadership"
              />
            </div>
            <div className="GridRow2">
              <PageCard link="/quotes"
                imageSrc={Quotes}
                imageAltText="Quotes"
                label="Quotes"
              />
              <ModalCard label="NatureXplorer"
                action={() => this.handleOpenModal(<NatureXplorer />)}
              />
            </div>
            <div className="GridRow2">
              <ModalCard label="Parkmerced.live"
                action={() => this.handleOpenModal(<ParkMercedLive />)}
              />
              <ModalCard label="Surprise Me"
                action={() => this.handleOpenModal(<SurpriseMe />)}
              />
            </div>
          </div>
          <div className="Divider" />
          <div className="BlogPosts">
            <p className="BlogPostsLabel">Latest Blog Posts</p>
            <div className="GridContainer">
              <div className="GridRowBlog">
                <BlogCard
                  link="https://pillow.codes/testing-in-react-native-jest-detox-d7b3b79a166a"
                  imgSrc={BlogTesting}
                  imgAltText="Blog Post - Testing in React Native"
                  label="Testing in React Native - Jest + Detox + Bitrise"
                />
                <BlogCard
                  link="https://medium.com/@mthakkar_/blockchain-technology-whats-all-the-hype-about-5f3b3b454163"
                  imgSrc={BlogBlockchain}
                  imgAltText="Blog Post - Blockchain technology"
                  label="Blockchain technology - What’s all the hype about?"
                />
                <BlogCard
                  link="https://pillow.codes/bitrise-codepush-react-native-ideal-mobile-ci-setup-6283b86146c"
                  imgSrc={BlogBitrise}
                  imgAltText="Blog Post - React Native Testing"
                  label="Bitrise + CodePush + React Native = Ideal Mobile CI Setup?"
                />
              </div>
              <div className="GridRowBlog2">
                <BlogCard
                  link="https://pillow.codes/testing-in-react-native-jest-detox-d7b3b79a166a"
                  imgSrc={BlogTesting}
                  imgAltText="Blog Post - Testing in React Native"
                  label="Testing in React Native - Jest + Detox + Bitrise"
                />
                <BlogCard
                  link="https://medium.com/@mthakkar_/blockchain-technology-whats-all-the-hype-about-5f3b3b454163"
                  imgSrc={BlogBlockchain}
                  imgAltText="Blog Post - Blockchain technology"
                  label="Blockchain technology - What’s all the hype about?"
                />
              </div>
              <div className="GridRowBlog2">
                <BlogCard
                  link="https://pillow.codes/bitrise-codepush-react-native-ideal-mobile-ci-setup-6283b86146c"
                  imgSrc={BlogBitrise}
                  imgAltText="Blog Post - React Native Testing"
                  label="Bitrise + CodePush + React Native = Ideal Mobile CI Setup?"
                />
              </div>
              <div className="BlogReadMore">
                <a href="https://medium.com/@mthakkar_" target="_Blank"
                  className="LinkText" rel="noopener noreferrer">
                  Read more <span role="img" aria-label="Right Arrow">➡️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal.bind(this)}
          className="Modal"
          overlayClassName="Overlay"
        >
          {this.state.modal}
          <div className="CloseIcon" onClick={this.handleCloseModal.bind(this)} />
        </ReactModal>
      </AppContainer>
    );
  }
}

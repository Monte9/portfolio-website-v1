import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../styles/App.css';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationName: '',
      likes: 0
    };
  }

  clickHdl() {
    let styleSheet = document.styleSheets[0];

    let animationName = `animation${Math.round(Math.random() * 100)}`;

    let keyframes =
      `@-webkit-keyframes ${animationName} {
        from { background-position: left; }
        to { background-position: right; }
    }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    this.setState({
      animationName: animationName,
      likes: this.state.likes + 1
    });
  }

  render() {
    const { likes } = this.state

    let style = {
      animationName: this.state.animationName,
      animationDuration: '0.8s',
      animationPlayState: 'running',
      animationTimingFunction: 'steps(28)'
    };

    return (
      <div className="Container">
        <div className="MobileNavBar">
          <NavLink exact activeClassName="NavLinkActive" to="/" className="NavLink">
            <div className="NavHeaderLink NoSelection">PORTFOLIO</div>
          </NavLink>
          <NavLink activeClassName="NavLinkActive" to="/about" className="NavLink">
            <div className="NavHeaderLink NoSelection">ABOUT</div>
          </NavLink>
        </div>
        <hr className="MobileDivider" />
        <div className="Header">
          <div className="IntroHeader">
            <Link to="/" className="NameLink">
              <p className="NameLabel NoSelection">MONTE THAKKAR</p>
            </Link>
            <p className="MobileNameLabelFirst NoSelection">MONTE</p>
            <p className="MobileNameLabelLast NoSelection">THAKKAR</p>
            <p className="AboutLabel NoSelection">Software Engineer. Living in the present.</p>
            <p className="AboutLabelSecond NoSelection">Dreaming of going to Mars.</p>
          </div>
          <div className="NavHeader">
            <NavLink exact activeClassName="NavLinkActive" to="/" className="NavLink">
              <div className="NavHeaderLink NoSelection">PORTFOLIO</div>
            </NavLink>
            <NavLink activeClassName="NavLinkActive" to="/about" className="NavLink">
              <p className="NavHeaderLink NoSelection">ABOUT</p>
            </NavLink>
          </div>
        </div>
        <div className="Divider" />
        {this.props.children}
        <div className="Divider" />
        <div className="HeartFeedback">
          <div className="IntroHello NoSelection">{likes}</div>
          <div className={likes > 0 ? "HeartSelected" : "Heart"} style={style} onClick={this.clickHdl.bind(this)} />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';

export default class AppContainer extends Component {
  render() {
    return (
      <div className="Container">
        <div className="MobileNavBar">
          <NavLink exact activeClassName="NavLinkActive" to="/" className="NavLink">
            <div className="NavHeaderLink">PORTFOLIO</div>
          </NavLink>
          <NavLink activeClassName="NavLinkActive" to="/about" className="NavLink">
            <div className="NavHeaderLink">ABOUT</div>
          </NavLink>
        </div>
        <hr className="MobileDivider" />
        <div className="Header">
          <div className="IntroHeader">
            <p className="NameLabel">MONTE THAKKAR</p>
            <p className="MobileNameLabelFirst">MONTE</p>
            <p className="MobileNameLabelLast">THAKKAR</p>
            <p className="AboutLabel">Software Engineer. Living in the present.</p>
            <p className="AboutLabelSecond">Dreaming of going to Mars.</p>
          </div>
          <div className="NavHeader">
            <NavLink exact activeClassName="NavLinkActive" to="/" className="NavLink">
              <div className="NavHeaderLink">PORTFOLIO</div>
            </NavLink>
            <NavLink activeClassName="NavLinkActive" to="/about" className="NavLink">
              <p className="NavHeaderLink">ABOUT</p>
            </NavLink>
          </div>
        </div>
        <div className="Divider" />
        {this.props.children}
        <div className="Divider" />
      </div>
    );
  }
}

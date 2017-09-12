import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../styles/App.css';

export default class AppContainer extends Component {
  render() {
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
      </div>
    );
  }
}

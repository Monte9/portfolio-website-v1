import React, { Component } from 'react';

export default class OpenSourceRow extends Component {
  render() {
    const { imgSrc, imgAltText, title, stars, subtitle, demoLink, codeLink } = this.props

    return (
      <div className="DetailRow PaddingVertical">
        <div className="DetailRowLeftContainer">
          <img
            className="OpenSourceImage NoSelection"
            src={imgSrc} alt={imgAltText}
          />
        </div>
        <div className="DetailRowRightContainer">
          <p className="OpenSourceTitleLabel">{title}</p>
          <p className="OpenSourceAboutLabel">{stars} 🌟</p>
          <p className="AboutText">{subtitle}</p>
          <div className="DetailButtonContainer">
            <a href={demoLink} target="_blank" className="LinkText NoSelection"
              rel="noopener noreferrer">
              <div className="DetailButton">Demo</div>
            </a>
            <a href={codeLink} target="_blank"  className="LinkText NoSelection"
              rel="noopener noreferrer">
              <div className="DetailButton">Code</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

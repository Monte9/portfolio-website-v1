import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MentionsLeadershipRow extends Component {
  render() {
    const {
      imgSrc, title, position, date,
      subtitle, websiteLink
    } = this.props

    return (
      <div className="DetailRow PaddingVertical">
        <div className="MentionsRowLeftContainer">
          {imgSrc}
        </div>
        <div className="MentionsRowRightContainer">
          <p className="OpenSourceTitleLabel">{title}</p>
          <p className="OpenSourceAboutLabel">{position}</p>
          <p className="OpenSourceAboutLabel">{date}</p>
          <p className="AboutText">{subtitle}</p>
          <div className="DetailButtonContainer">
            <a href={websiteLink} target="_blank" className="LinkText NoSelection"
              rel="noopener noreferrer">
              <div className="DetailButton">Visit</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MentionsLeadershipRow extends Component {
  render() {
    const {
      imgSrc, title, position, date,
      subtitle, websiteLink, blog, blogLink,
      buttonLabel, code, codeLink
    } = this.props

    return (
      <div className="MentionsDetailRow PaddingVertical">
        <div className="MentionsRowLeftContainer">
          {imgSrc}
        </div>
        <div className="MentionsRowRightContainer">
          <p className="OpenSourceTitleLabel">{title}</p>
          <p className="OpenSourceAboutLabel">{position}</p>
          <p className="OpenSourceAboutLabel">{date}</p>
          <p className="MentionsAboutText">{subtitle}</p>
          <div className="DetailButtonContainer">
            <a href={websiteLink} target="_blank" className="LinkText NoSelection"
              rel="noopener noreferrer">
              <div className="DetailButton">{buttonLabel || "Visit"}</div>
            </a>
            {blog &&
              <a href={blogLink} target="_blank" className="LinkText NoSelection"
                rel="noopener noreferrer">
                <div className="DetailButton">Blog</div>
              </a>
            }
            {code &&
              <a href={codeLink} target="_blank" className="LinkText NoSelection"
                rel="noopener noreferrer">
                <div className="DetailButton">Code</div>
              </a>
            }
          </div>
        </div>
      </div>
    );
  }
}

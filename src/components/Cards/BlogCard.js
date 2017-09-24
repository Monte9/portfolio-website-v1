import React, { Component } from 'react';

export default class BlogCard extends Component {
  render() {
    const { link, imgSrc, imgAltText, label } = this.props

    return (
      <div className="GridRectangle">
        <a href={link} className="BlogLink">
          <img className="RectangleImage"
            src={imgSrc}
            alt={imgAltText}
          />
          <div className="BoxLabel">{label}</div>
        </a>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageCard extends Component {
  render() {
    const { link, imageSrc, imageAltText, label } = this.props

    return (
      <div className="GridBox">
        <Link to={link} className="GenericLink">
          <img className="BoxImage"
            src={imageSrc}
            alt={imageAltText}
          />
          <div className="BoxLabel">{label}</div>
        </Link>
      </div>
    );
  }
}

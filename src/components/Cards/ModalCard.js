import React, { Component } from 'react';

import { GRADIENTS } from '../Shared/Constants'

export default class ModalCard extends Component {
  constructor() {
    super()

    this.state = {
      hover: false,
      randomGradient: {
        primary: '#D76D77',
        secondary: '#FFAF7B'
      }
    }
  }

  toggleHover() {
    const randomNumber = Math.floor(Math.random() * GRADIENTS.length);
    const randomGradient = GRADIENTS[randomNumber]

    this.setState({
      hover: !this.state.hover,
      randomGradient
    })
  }

  render() {
    const { action, label } = this.props
    const { hover, randomGradient } = this.state
    const linkStyle = {
      background: `linear-gradient(145deg, ${randomGradient.primary}, ${randomGradient.secondary})`
    }

    return (
      <div className="GridBox" onClick={action}>
        <div className="BoxImage"
          style={linkStyle}
          onMouseEnter={this.toggleHover.bind(this)}
        />
        <div className="BoxLabel">{label}</div>
      </div>
    );
  }
}

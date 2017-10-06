import React, { Component } from 'react';

export default class ModalCard extends Component {
  constructor() {
    super()

    this.state = {
      hover: false
    }

    this.toggleHover = this.toggleHover.bind(this)
  }

  componentWillMount() {
    const { gradientColors } = this.props

    this.setState({
      randomGradient: {
        primary: gradientColors[0].primary,
        secondary: gradientColors[0].secondary
      }
    })
  }

  generateRandomNumber(gradientColors) {
    return Math.floor(Math.random() * gradientColors.length);
  }

  toggleHover() {
    const { gradientColors } = this.props
    let randomGradient = gradientColors[this.generateRandomNumber(gradientColors)]

    while (this.state.randomGradient.primary === randomGradient.primary) {
      randomGradient = gradientColors[this.generateRandomNumber(gradientColors)]
    }

    this.setState({
      hover: !this.state.hover,
      randomGradient
    })
  }

  render() {
    const { action, label } = this.props
    const { randomGradient } = this.state
    const linkStyle = {
      background: `linear-gradient(145deg, ${randomGradient.primary}, ${randomGradient.secondary})`
    }

    return (
      <div className="GridBox" onClick={action}>
        <div className="BoxImage"
          style={linkStyle}
          onMouseEnter={this.toggleHover}
        />
        <div className="BoxLabel">{label}</div>
      </div>
    );
  }
}

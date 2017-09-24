import React, { Component } from 'react';

export default class ModalCard extends Component {
  render() {
    const { action, label } = this.props

    return (
      <div className="GridBox GenericLink" onClick={action}>
        <div className="BoxImage" />
        <div className="BoxLabel">{label}</div>
      </div>
    );
  }
}

import React, { Component } from 'react';

import AppContainer from './AppContainer'

export default class NotFound extends Component {
  render() {
    return (
      <AppContainer>
        <div className="NotFoundContainer">
          <p className="NotFoundLabel">
            You are too ambitious! 😬 This page doesn't exits yet.
          </p>
        </div>
      </AppContainer>
    );
  }
}

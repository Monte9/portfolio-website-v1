import React, { Component } from 'react';

import AppContainer from '../AppContainer'

export default class Quotes extends Component {
  render() {
    return (
      <AppContainer>
        <div className="NotFoundContainer">
          <p className="NotFoundLabel">
            Quotes
          </p>
        </div>
      </AppContainer>
    );
  }
}

import React, { Component } from 'react';
import './App.css';

var getDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getDimensions();

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState(getDimensions());
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div className="app-container" style={{width: this.state.width, height: this.state.height}}>
        <a href="https://www.linkedin.com/in/montethakkar/">
          <p className="first-name" style={{fontSize: 0.125 * this.state.width, paddingLeft: 0.01 * this.state.width, paddingRight: 0.01 * this.state.width}}>
            Monte
          </p>
        </a>
        <a href="https://github.com/monte9">
          <p className="last-name" style={{fontSize: 0.125 * this.state.width, top: 0.125 * this.state.width + 0.05 * this.state.width, paddingLeft: 0.02 * this.state.width, paddingRight: 0.02 * this.state.width}}>
            Thakkar
          </p>
        </a>
        <div className="avatar-container">
          <a href="https://twitter.com/MThakkar_">
            <img
              className="avatar"
              src="https://avatars0.githubusercontent.com/u/7840686?v=4&s=460"
              style={{height: 0.2 * this.state.height, width: 0.2 * this.state.height, borderRadius: '5rem'}}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default App;

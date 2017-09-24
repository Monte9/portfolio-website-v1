import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { gql, graphql } from 'react-apollo'

import '../styles/App.css';

class AppContainer extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      allLikeses: PropTypes.array
    }).isRequired,
    updateLikes: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      animationName: '',
      likes: 0,
      dataFetched: false
    };
  }

  clickHdl() {
    let styleSheet = document.styleSheets[0];
    let animationName = `animation${Math.round(Math.random() * 100)}`;
    let keyframes =
      `@-webkit-keyframes ${animationName} {
        from { background-position: left; }
        to { background-position: right; }
    }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    this.setState({
      animationName: animationName,
      likes: this.state.likes + 1
    });

    this.handleUpdate(this.props.data.allLikeses[0])
  }

  handleUpdate = async likes => {
    await this.props.updateLikes({
      variables: {
        id: likes.id,
        count: this.state.likes + 1
      }
    });
  };

  render() {
    const { likes, dataFetched } = this.state
    const { loading } = this.props.data

    let style = {
      animationName: this.state.animationName,
      animationDuration: '0.8s',
      animationPlayState: 'running',
      animationTimingFunction: 'steps(28)'
    };

    if (!loading && !dataFetched) {
      const { allLikeses } = this.props.data

      this.setState({
        likes: allLikeses[0].count,
        dataFetched: true
      });
    }

    return (
      <div className="Container">
        <div className="MobileNavBar">
          <NavLink exact activeClassName="NavLinkActive" to="/" className="NavLink">
            <div className="NavHeaderLink NoSelection">PORTFOLIO</div>
          </NavLink>
          <NavLink activeClassName="NavLinkActive" to="/about" className="NavLink">
            <div className="NavHeaderLink NoSelection">ABOUT</div>
          </NavLink>
        </div>
        <hr className="MobileDivider" />
        <div className="Header">
          <div className="IntroHeader">
            <Link to="/" className="NameLink">
              <p className="NameLabel NoSelection">MONTE THAKKAR</p>
            </Link>
            <p className="MobileNameLabelFirst NoSelection">MONTE</p>
            <p className="MobileNameLabelLast NoSelection">THAKKAR</p>
            <p className="AboutLabel NoSelection">Software Engineer. Living in the present.</p>
            <p className="AboutLabelSecond NoSelection">Dreaming of going to Mars.</p>
          </div>
          <div className="NavHeader">
            <NavLink exact activeClassName="NavLinkActive" to="/" className="NavLink">
              <div className="NavHeaderLink NoSelection">PORTFOLIO</div>
            </NavLink>
            <NavLink activeClassName="NavLinkActive" to="/about" className="NavLink">
              <p className="NavHeaderLink NoSelection">ABOUT</p>
            </NavLink>
          </div>
        </div>
        <div className="Divider" />
        {this.props.children}
        <div className="Divider" />
        <div className="HeartFeedback NoMobileHighlight">
          <div className="IntroHello NoSelection">{loading ? "-" : likes}</div>
          <div className={likes > 0 ? "HeartSelected" : "Heart"} style={style} onClick={this.clickHdl.bind(this)} />
        </div>
      </div>
    );
  }
}

const LikesQuery = gql`query likes {
  allLikeses {
    id
    count
  }
}`

const updateLikes = gql`mutation updateLikes($id: ID!, $count: Int!) {
  updateLikes(id: $id, count: $count) {
    id
    count
  }
}`

const AppContainerWithLikes = graphql(LikesQuery)(
  graphql(updateLikes, { name: 'updateLikes' })(AppContainer)
);

export default AppContainerWithLikes

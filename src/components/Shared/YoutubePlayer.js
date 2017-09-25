import React, { Component } from 'react';
import YouTube from 'react-youtube'

export default class YoutubePlayer extends Component {
  render() {
    const opts = {
      width: '595',
      height: '335',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        controls: 1,
        disablekb: 1,
        rel: 0,
        showinfo: 0
      }
    };

    return (
      <YouTube
        videoId="j3UBzlO40qU"
        opts={opts}
        onReady={true}
      />
    );
  }
}

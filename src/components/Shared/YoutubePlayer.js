import React, { Component } from 'react';
import YouTube from 'react-youtube'

const WIDTH = window.innerWidth;

export default class YoutubePlayer extends Component {
  render() {
    const opts = {
      width: WIDTH > 750 ? '595' : '300',
      height: WIDTH > 750 ? '335' : '169',
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

import React, { Component } from 'react';

import AppContainer from '../AppContainer'
import QuoteBlock from '../Shared/QuoteBlock'

export default class Quotes extends Component {
  render() {
    return (
      <AppContainer>
        <div className="ShortIntro">
          <p className="IntroAbout DetailPageIntro">I Think. And that's my superpower.</p>
          <p className="IntroHello DetailPageTitle">Quotes <span role="img" aria-label="Package">💭</span></p>
        </div>
        <QuoteBlock
          content="A man with no love, is like a man with no sense of direction. But these are the men that find new lands and thus shape the world."
          noQuotes
        />
        <QuoteBlock
          content="There are 3 kinds of insults: Verbal => fools your heart; Physical => touches your body; Mental => injures your mind."
          noQuotes
        />
        <QuoteBlock
          content="Those who cannot remember the past are condemned to repeat it"
          author="George Santayana"
        />
        <QuoteBlock
          content="I think the value of beauty and inspiration is very much underrated, no question. But I want to be clear, I’m not trying to be anyone’s savior. I’m just trying to think about the future and not be sad."
          author="Elon Musk"
        />
      </AppContainer>
    );
  }
}

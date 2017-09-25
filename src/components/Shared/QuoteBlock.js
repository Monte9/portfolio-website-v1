import React, { Component } from 'react';

export default class QuoteBlock extends Component {
  render() {
    const { content, noQuotes, author } = this.props

    return (
      <div className="QuotesContainer">
        <div className="BlockQuote">
          {noQuotes ?
            <p className="QuoteText">{content}</p> :
            <p className="QuoteText">"{content}"</p>
          }
        </div>
        {author &&
          <p className="QuoteAuthor">- {author}</p>
        }
      </div>
    );
  }
}


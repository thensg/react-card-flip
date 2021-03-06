import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactCardFlip from 'react-card-flip';

import dog from './images/dog5-min.jpg';

class SlowerExample extends Component  {
  constructor() {
    super();
    this.state = {
			isFlipped: false
		};
		this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
		event.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipSpeedBackToFront={2}
        flipSpeedFrontToBack={2}>
        <div key="front" style={this.props.styles.card}>
          <img style={this.props.styles.image} src={dog}/>

          <button onClick={this.handleClick}>
            Flip Card
          </button>
        </div>

        <div key="back" style={this.props.styles.card}>
          <img
            style={this.props.styles.image}
            src="//www.planwallpaper.com/static/images/Beagle-Wallpaper-dogs-7013951-1024-768.jpg"
          />

          <button onClick={this.handleClick}>
            Flip Card
          </button>
        </div>
      </ReactCardFlip>
    );
  }
};

SlowerExample.propTypes = {
  styles: PropTypes.object
};

export default SlowerExample;

import React from 'react';
import PropTypes from 'prop-types';
import splashImage from '../../images/splash.jpeg';
import './Banner.scss';

const Banner = props => {
  return(
    <div className='banner-wrapper'>
      <div className='content-wrapper'>      
        <h1 className='hungry-text fade-in'>Hungry?</h1>
        <h1 className='ingredients-text fade-in'>Have ingredients, but not sure what to make?</h1>
        <div className='button-panel'>
          <div className='button get-started fade-in' onClick={props.handleGetStarted}>
            Get Started
          </div>
          <div className='button learn-more fade-in' onClick={props.handleLearnMore}>
            Learn More
          </div>
      </div>
      </div>
      <div className='image-wrapper'>
        <img src={splashImage} alt='Logo' />
      </div>
    </div>
  );
}

Banner.propTypes = {
  handleGetStarted: PropTypes.func.isRequired,
  handleLearnMore: PropTypes.func.isRequired
};

export default Banner;
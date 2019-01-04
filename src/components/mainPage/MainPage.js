import React from 'react';
import Banner from './Banner';
import './MainPage.scss';

class MainPage extends React.Component {

  handleGetStarted() {
    console.log('start button clicked');
  }

  handleLearnMore() {
    console.log('learn more button clicked');
  }

  render() {
    return(
      <div className="mainPage-wrapper">
        <Banner 
          handleGetStarted={this.handleGetStarted}
          handleLearnMore={this.handleLearnMore}
        />
      </div>
    )
  }
}

export default MainPage;
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="jumbotron">
        <h1 className="display-3">Welcome to Gains!</h1>
        <p className="lead">Add or subtract macronutrients from your recipes for optimal intake</p>
      </div>
    </div>
  );
};

export default Header;
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='navbar'>
        <ul>
          <li><a href='#about'>About</a></li>
          <li><a href='#ingredientSearch'>Ingredient Search</a></li>
          <li><a className='active' href='#recipeSearch'>Recipe Search</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
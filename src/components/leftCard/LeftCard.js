import React from 'react';
import './LeftCard.css';

// component imports
import ButtonPanel from './addIngredientForm/AddIngredientForm';

const LeftCard = () => {
  return (
    <div className="leftcard-wrapper">
      <div className="card border-primary mb-3" style={{ "max-width": "40rem" }}>
        <div className="card-header">Recipe</div>
        <div className="card-body">
          <ButtonPanel />
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
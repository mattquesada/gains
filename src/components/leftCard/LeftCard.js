import React from 'react';
import './LeftCard.css';

const LeftCard = () => {
  const alertSomething = () => {
    alert("button pressed");
  }

  return(
    <div className="leftcard-wrapper">
      <div className="card border-primary mb-3" style={{"max-width": "40rem" }}>
        <div className="card-header">Ingredients</div>
        <div className="card-body">
          <div class="btn-group-vertical" data-toggle="buttons">
            <button type="button" class="btn btn-primary" onClick={alertSomething}>Add Ingredient</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
import React from 'react';

const AddIngredientForm = () => {
  const handleIngredientAdd = () => {
    alert("Ingredient Added");
  }

  return (
    <div class="AddIngredientForm-wrapper">
      <form className="form-inline my-2 my-lg-0" onSubmit={handleIngredientAdd}>
        <input className="form-control mr-sm-2" type="text" placeholder="Ingredient" />
        <button className="btn btn-primary" type="submit">Add</button>
       </form>
    </div>
  );
}

export default AddIngredientForm;
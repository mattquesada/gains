import React from 'react';

class AddIngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // update state on key-press
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(this.state.value);
    this.setState({ value: '' });
    event.preventDefault();
  }

  render() {
    return (
      <div class="AddIngredientForm-wrapper">
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
          <input  className="form-control mr-sm-2" 
                  type="text" 
                  placeholder="Ingredient" 
                  value={this.state.value}
                  onChange={this.handleChange} 
          />
          <button className="btn btn-primary" type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddIngredientForm;
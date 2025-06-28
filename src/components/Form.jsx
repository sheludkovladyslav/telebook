import React, { Component } from "react";
import css from "./Form.module.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
    };
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeNumber = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const name = this.state.name;
    const number = this.state.number;

    this.props.onAddContact(name, number);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className={css.form} action="" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className={css.input}
          value={this.state.name}
          onChange={this.handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="phone" className={css.label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          className={css.input}
          value={this.state.number}
          onChange={this.handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="phone"
        />

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

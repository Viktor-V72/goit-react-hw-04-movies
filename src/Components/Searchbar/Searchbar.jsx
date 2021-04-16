import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button className={styles.SearchForm_button} type="submit">
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>
          <input
            className={styles.SearchForm_input}
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

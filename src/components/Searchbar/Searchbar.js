import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "./Searchbar.module.css"



class Searchbar extends Component{
static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    }

    state = {
       query: '' 
    }

    handleChange = (event) => {
       this.setState({query: event.currentTarget.value})
    }
    
    handleSubmit=(event)=> {
        event.preventDefault();
        this.props.onSubmit(this.state.query)
        this.setState({query:""})
    }

    render() {
        return (
    <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={styles.SearchFormButton}>
    <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={styles.SearchFormInput}
      type="text"
      value={this.state.query}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
    />
  </form>
</header>
        )
    }
}

export default Searchbar;
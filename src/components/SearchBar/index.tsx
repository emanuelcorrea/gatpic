import styles from './style.module.scss';

import React, { ReactEventHandler } from 'react';

interface SearchProps {
  onInputSearch: Function
}

class SearchBar extends React.Component<SearchProps> {
  state = { text: '' }
  
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onInputSearch(this.state.text)
  }
   
  render() {
    return (
      <div className={styles.searchContainer}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.searchBar}
            value={this.state.text}
            onChange={e => this.setState({ text: e.target.value })}
            type="text"
            placeholder="Search your cat here!"
            autoFocus
          />
          <button
            className={styles.searchButton}
            type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
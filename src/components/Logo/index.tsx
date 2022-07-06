import React from 'react';

import styles from './style.module.scss'

import catIcon from '../../assets/images/cat-icon.png'

class Logo extends React.Component {
  render() {
    return (
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Gat<span>Pic</span>
        </h1>
        <img src={catIcon} alt="Cat icon" />
      </div>
    );
  }
}

export default Logo;
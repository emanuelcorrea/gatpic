import React from 'react';

import styles from './style.module.scss'

class Logo extends React.Component {
  render() {
    return (
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Gat<span>Pic</span>
        </h1>
      </div>
    );
  }
}

export default Logo;
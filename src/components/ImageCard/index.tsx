import React from 'react'

import styles from './style.module.scss'

interface Urls {
  regular: string
}

interface ImageProps {
  id: string,
  description: string,
  created_at: string,
  likes: number,
  urls: Urls
}

interface Data {
  data: ImageProps
}

const ImageCard:React.FC<Data> = props => {
  const { description, urls, likes } = props.data;
  
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageCard}>
        <img src={urls.regular} alt={description} />
      </div>
      <div className={styles.imageDescription}>
        <i className="fas fa-heart" />
        <span>{ likes }</span>
        <p>Likes</p>
      </div>
    </div>
  );
}

export default ImageCard

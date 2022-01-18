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
  const { description, urls, created_at } = props.data;
  
  return (
    <div className={styles.imageCard}>
      <img src={urls.regular} alt={description}  />
    </div>
  )
}

export default ImageCard

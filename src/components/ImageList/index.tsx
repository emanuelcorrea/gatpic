import React from 'react';

import styles from './style.module.scss';

import ImageCard from '../ImageCard';

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

interface ListImages {
  images: ImageProps[]
}

const ImageList:React.FC<ListImages> = props => {
  const images = props.images.map((images: ImageProps) => {
    return <ImageCard key={images.id} data={images} />
  })
  
  return (
    <div className={styles.imagesContainer}>
      {images}
    </div>
  );
}

export default ImageList
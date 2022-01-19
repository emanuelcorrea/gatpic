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
  urls: Urls,
  tags: Array<{title: string}>
}

interface ListImages {
  images: ImageProps[],
  total: number,
  title: string
}

const ImageList:React.FC<ListImages> = props => {
  const images = props.images.map((images: ImageProps) => {
    return <ImageCard key={images.id} data={images} />
  })
  
  if (props.total > 0 ) {
    return (
      <>
        <h2 className={styles.info}>
          There are <span>{props.total == 10000 ? '10000+' : props.total}</span> pics about <span>{props.title}</span>
        </h2>
        <div className={styles.imagesContainer}>
          {images}
        </div>
      </>
    );
  }

  return <></>
}

export default ImageList
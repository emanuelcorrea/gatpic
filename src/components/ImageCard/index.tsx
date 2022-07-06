import React, { useState } from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

import styles from './style.module.scss'

export type ImageProps = {
  id: string,
  description: string,
  created_at: string,
  likes: number,
  height: number,
  width: number,
  urls: {
    regular: string
  },
}

type ImageCardProps = {
  data: ImageProps,
  onClick: React.SetStateAction<any>
}

const ImageCard:React.FC<ImageCardProps > = ({ data: { description, urls, likes }, onClick }): JSX.Element => {
  const [rendered, setRendered] = useState(false);

  console.log('rendered :>> ', rendered);
  
  return (
    <div className={styles.imageContainer} onClick={onClick}>
      <div className={styles.imageCard}>
        <LazyLoadImage
          src={urls.regular}
          effect="blur"
          alt={description}
          afterLoad={() => setRendered(true)}
        />
      </div>
      {rendered !== false ?
        <div className={styles.imageDescription}>
          <i className="fas fa-heart" />
          <span>{ likes }</span>
          <p>Likes</p>
        </div>
      : null}
    </div>
  );
}
// const ImageCard:React.FC<{data: ImageProps}> = ({ data: { description, urls, likes } }) => {
//   return (
//     <div className={styles.imageContainer}>
//       <div className={styles.imageCard}>
//         {<img src={urls.regular} alt={description} />}
        
//       </div>
//       <div className={styles.imageDescription}>
//         <i className="fas fa-heart" />
//         <span>{ likes }</span>
//         <p>Likes</p>
//       </div>
//     </div>
//   );
// }

export default ImageCard;

import styles from './style.module.scss';

import ImageCard from '../ImageCard';
import { useSelector } from 'react-redux';

type ImageState = {
  images: object
}

type ImageResults = {
  title: string,
  results: object[],
  totals: number
}

// type Image = {
//   id: string,
//   description: string,
//   created_at: string,
//   likes: number,
//   urls: {
//     regular: string
//   }
// }

const ImageList = () => {
  const images: ImageResults = useSelector((state: ImageState) => state.images as ImageResults);

  if (images.totals) {
    const imageList = images.results.map((image: any, index) => {
      return <ImageCard key={index} data={image} />
    });
    
    return (
      <>
        <h2 className={styles.info}>
          There are <span>{`${images.totals}+`}</span> pics about <span>{images.title}</span>
        </h2>
        <div className={styles.imagesContainer}>{imageList}</div>
      </>
    );
  }

  return null;
}

export default ImageList
import styles from './style.module.scss';

import ImageCard from '../ImageCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ImageList = () => {
  const images = useSelector((state: RootState) => state.images);

  if (images.total) {
    return (
      <>
        <h2 className={styles.info}>
          There are <span>{`${images.total}+`}</span> pics about <span>{images.title}</span>
        </h2>
        <div className={styles.imagesContainer}>
          {images.results.map((image: any, index) => {
            return <div><ImageCard key={index} data={image} /></div>
          })}
        </div>
      </>
    );
  }

  return null;
}

export default ImageList
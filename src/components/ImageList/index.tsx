import styles from './style.module.scss';

import ImageCard, { ImageProps } from '../ImageCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Modal from '../Modal';
import { memo, useState } from 'react';

const ImageList = () => {
  const images = useSelector((state: RootState) => state.images);
  const [selectedImage, setSelectedImage] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClickImage = (imageUrl: string) => {
    setModalOpen(currOpen => !currOpen)
    setSelectedImage(imageUrl)
  }

  if (images.total) {
    return (
      <>
        <h2 className={styles.info}>
          There are <span>{`${images.total}+`}</span> pics about <span>{images.title}</span>
        </h2>
        <div className={styles.imagesContainer}>
          {images.results.map((image, index) => {
            return <div><ImageCard onClick={() => handleClickImage(image.urls.regular)} key={index} data={image} /></div>
          })}
        </div>
        <Modal imageUrl={selectedImage} isOpen={isModalOpen} handleOpen={setModalOpen} />
      </>
    );
  }

  return null;
}

export default memo(ImageList)
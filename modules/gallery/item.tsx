import React from 'react';
import { Col, Modal } from 'react-bootstrap';
import Image from 'next/image';

import { usePopup } from 'lib/hooks/use-popup';

import styles from 'modules/gallery/style.module.css';
import zoom from 'public/icons/zoom.svg';

interface Props {
  thumbnail: StaticImageData;
  original: StaticImageData;
  quality: number;
  alt: string;
}

export const GalleryItem: React.FC<Props> = ({ thumbnail, original, quality, alt }) => {
  const [{ isOpen }, { open, close }] = usePopup();

  return (
    <>
      <Col sm="6" lg="4">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={styles.img} onClick={open}>
          <div className={styles.zoom}>
            <Image width={40} height={40} src={zoom} quality={quality} alt="Увеличить" />
          </div>
          <Image layout="responsive" src={thumbnail} quality={quality} alt={alt} />
        </div>
      </Col>
      <Modal show={isOpen} onHide={close} size="xl">
        <Modal.Header closeButton />
        <Modal.Body>
          <Image layout="responsive" src={original} alt={alt} />
        </Modal.Body>
      </Modal>
    </>
  );
};

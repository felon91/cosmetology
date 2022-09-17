import React, { Fragment } from 'react';
import { Col, Modal } from 'react-bootstrap';
import Image from 'next/image';

import { usePopup } from 'lib/hooks/use-popup';

import styles from 'modules/gallery/style.module.css';

interface Props {
  thumbnail: StaticImageData;
  original: StaticImageData;
  quality: number;
}

export const GalleryItem: React.FC<Props> = ({ thumbnail, original, quality }) => {
  const [{ isOpen }, { open, close }] = usePopup();

  return (
    <>
      <Col sm="6" lg="4">
        <Image
          className={styles.pointer}
          onClick={open}
          layout="responsive"
          src={thumbnail}
          quality={quality}
        />
      </Col>
      <Modal show={isOpen} onHide={close} size="xl">
        <Modal.Header closeButton />
        <Modal.Body>
          <Image onClick={open} layout="responsive" src={original} />
        </Modal.Body>
      </Modal>
    </>
  );
};

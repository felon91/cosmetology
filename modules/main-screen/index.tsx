import Image from 'next/image';
import { Button, Container } from 'react-bootstrap';
import cn from 'classnames';

import photo from 'public/img/bg.jpg';

import styles from './style.module.scss';

export const MainScreen: React.FC = () => (
  <div className={styles.mainScreen}>
    <Container className={cn('position-relative text-center', styles.container)}>
      <h1 className={cn('mb-4 fw-bold', styles.title)}>Косметолог Минск</h1>
      <Button size="lg" variant="primary" className={cn('mb-5', styles.button)}>
        Записаться
      </Button>
      <p className={styles.subTitle}>
        Скидка <b>-20%</b> на все процедуры для новых клиентов
      </p>
    </Container>
    <div className={styles.photo}>
      <Image layout="fill" objectFit="cover" src={photo} />
    </div>
  </div>
);

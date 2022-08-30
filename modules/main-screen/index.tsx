import Image from 'next/image';
import React from 'react';
import Title from 'antd/lib/typography/Title';
import { Button } from 'antd';

import photo from 'public/bg.jpg';

import styles from './style.module.scss';

export const MainScreen: React.FC = () => (
  <div className={styles.mainScreen}>
    <Title className={styles.title}>Косметолог Минск</Title>
    <Button size="large" type="primary" className={styles.button}>
      Записаться
    </Button>
    <Title level={2} className={styles.subTitle}>
      Скидка <b>-20%</b> на все процедуры для новых клиентов
    </Title>
    <Image layout="fill" objectPosition="center" objectFit="cover" src={photo} />
  </div>
);

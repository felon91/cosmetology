import { Container } from 'react-bootstrap';
import React from 'react';
import Image from 'next/image';

import kosmetolog from 'public/img/kosmetolog.jpg';

interface Props {
  className?: string;
}

export const SeoText: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <Container>
      <h1>Косметолог Минск</h1>
      <p>
        Здравствуйте, я очень рада видеть вас на своей странице и хочу рассказать немного о себе.
        Меня зовут Алина, мне 31 год, я косметолог-эстетист с медицинским образованием.
      </p>
      <div className="float-md-end d-flex justify-content-center ms-md-4 my-md-2 my-3">
        <Image quality={90} src={kosmetolog} alt="косметолог минск" width={300} height={300} />
      </div>
      <p>
        Стать косметологом я мечтала давно, но, как мы знаем, чтобы мечты сбывались нужно
        действовать.
      </p>
      <p>
        В 2012 году окончила Минский медицинский колледж получив диплом медицинской сестры. Работала
        по профессии с перерывами в декретный отпуск и уже тогда задумывалась о косметологии. В 2021
        году четко для себя решила, что буду менять свою жизнь и приступила к обучению в учебном
        центре Натальи Антонович, где началась совершенно другая жизнь.
      </p>
      <p>
        Во время учёбы ещё больше загорелась косметологией, мне так нравились результаты которых
        можно достичь при помощи профессиональной косметики, что хотелось узнавать все больше и
        больше.
      </p>
      <p>
        Получив диплом косметолога-эстетиста 4,5 разряда я понимала, что это только начало и дальше
        все зависит только от меня. Сейчас косметология не стоит на месте и учиться нужно постоянно.
        Чем больше ты узнаешь нового, тем больше ты можешь дать своим клиентам.
      </p>
      <p>
        Приглашаю вас на косметологические процедуры в свой уютный кабинет. Очень хочу делать людей
        счастливыми и быть полезной!
      </p>
    </Container>
  </section>
);

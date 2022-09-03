import { Container } from 'react-bootstrap';
import React from 'react';

interface Props {
  className?: string;
}

export const SeoText: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <Container>
      <h1>Косметология в Минске</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quo!</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eum eveniet iusto. A
        consequuntur dolor eos eum eveniet ex facere facilis laborum magni maiores maxime nulla,
        omnis, optio porro qui reiciendis rem repellat saepe sed sunt! Alias aliquid eum eveniet
        explicabo, illum incidunt, ipsum iusto magnam, nam natus possimus tempora.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque cumque fugiat in
        minima modi molestiae nemo neque nobis optio pariatur perferendis, possimus ratione rerum
        totam velit veniam! Ad animi assumenda consequatur culpa, cum cumque delectus doloremque,
        doloribus esse est expedita facere impedit itaque iure laboriosam maiores modi
        necessitatibus pariatur placeat possimus quaerat quam ratione velit. Aspernatur enim est
        vitae voluptate? Ab aut commodi consequatur cumque cupiditate deserunt ducimus eveniet
        exercitationem harum ipsam minus officiis quaerat quia reprehenderit tenetur vitae,
        voluptate voluptates. Consequatur culpa esse et fugit impedit modi pariatur, repudiandae
        temporibus? Debitis error minima molestiae nostrum placeat, sapiente unde!
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </Container>
  </section>
);

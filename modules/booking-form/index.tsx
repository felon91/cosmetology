import { useFormContext } from 'react-hook-form';
import { Button, Form, Modal } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';

import { InputMaskField } from 'components/fields/input-mask';
import { FormWrapper } from 'components/form';

import type { ResponseShape } from 'lib/core';
import { bffHost } from 'lib/core';

import type { Article } from 'pages/articles';

interface Props {
  isOpenForm: boolean;
  closeForm: () => void;
}

const BookingFormWrapper: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label required>Ваше имя</Form.Label>
        <Form.Control {...register('name')} placeholder="Введите ваше имя" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Ваш телефон</Form.Label>
        <InputMaskField name="phone" />
        {errors.phone && (
          <Form.Text className="text-danger">
            <>{errors.phone.message || 'Номер телефона должен быть заполнен'}</>
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Комментарий</Form.Label>
        <Form.Control
          rows={4}
          as="textarea"
          {...register('comment')}
          placeholder="Ваш комментарий"
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Отправить заявку
      </Button>
    </>
  );
};

interface DataProps {
  phone: string;
  name?: string;
}
const onSubmit = async (data: DataProps) => {
  const result = await axios.post<ResponseShape<Article>>(`${bffHost}/api/bids`, data);

  return result;
};

export const BookingForm: React.FC<Props> = ({ isOpenForm, closeForm }) => (
  <Modal centered show={isOpenForm} onHide={closeForm} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Онлайн запись</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormWrapper onSubmit={onSubmit}>
        <BookingFormWrapper />
      </FormWrapper>
    </Modal.Body>
  </Modal>
);

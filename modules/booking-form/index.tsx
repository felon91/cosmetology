import { useFormContext } from 'react-hook-form';
import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
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

interface FormWrapperProps {
  isLoading?: boolean;
}

const BookingFormWrapper: React.FC<FormWrapperProps> = ({ isLoading }) => {
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

      <Button disabled={isLoading} variant="outline-primary" type="submit">
        Отправить заявку
      </Button>
    </>
  );
};

interface DataProps {
  phone: string;
  name?: string;
}

export const BookingForm: React.FC<Props> = ({ isOpenForm, closeForm }) => {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const onSubmit = async (data: DataProps) => {
    setSuccess(false);
    setPending(true);
    const result = await axios.post<ResponseShape<Article>>(`${bffHost}/api/bids`, data);

    setPending(false);
    setSuccess(true);
    return result;
  };

  const hideModal = () => {
    setSuccess(false);
    closeForm();
  };

  return (
    <Modal centered show={isOpenForm} onHide={hideModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Онлайн запись</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormWrapper onSubmit={onSubmit}>
          <BookingFormWrapper isLoading={pending} />
          {success && (
            <p className="text-success fs-5 border-success p-2 mt-3 mb-0 border rounded">
              Ваша заявка была успешно отправлена
            </p>
          )}
        </FormWrapper>
      </Modal.Body>
    </Modal>
  );
};

import { Breadcrumb, Button, Container, Table } from 'react-bootstrap';
import React from 'react';

import { Title } from 'components/title';

import { Routes } from 'lib/routes';
import { usePopup } from 'lib/hooks/use-popup';

import { priceList } from 'modules/services/core';
import { BookingForm } from 'modules/booking-form';

interface Props {
  className?: string;
}

export const Services: React.FC<Props> = ({ className }) => {
  const [{ isOpen }, { open, close }] = usePopup();

  return (
    <section className={className}>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href={Routes.Main}>Главная</Breadcrumb.Item>
          <Breadcrumb.Item active>Услуги</Breadcrumb.Item>
        </Breadcrumb>
        <Title tag="h1">Стоимость услуг</Title>
        <Table className="mb-5" striped bordered responsive>
          <thead>
            <tr>
              <th>Прайс лист</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {priceList.main.map(({ title, price }) => (
              <tr key={title}>
                <td className="w-75">{title}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Table className="mb-5" striped bordered responsive>
          <thead>
            <tr>
              <th>Пилинги pHformula</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {priceList.peeling.map(({ title, price }) => (
              <tr key={title}>
                <td className="w-75">{title}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Table className="mb-5" striped bordered responsive>
          <thead>
            <tr>
              <th>Массаж</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {priceList.massage.map(({ title, price }) => (
              <tr key={title}>
                <td className="w-75">{title}</td>
                <td>{price}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={2}>Дополнение к массажу</td>
            </tr>
            {priceList.additionToMassage.map(({ title, price }) => (
              <tr key={title}>
                <td className="w-75">{title}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Table className="mb-5" striped bordered responsive>
          <thead>
            <tr>
              <th>Остальные услуги</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {priceList.other.map(({ title, price }) => (
              <tr key={title}>
                <td className="w-75">{title}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p className="text-center">
          <Button onClick={open} size="lg">
            Онлайн запись
          </Button>
        </p>
        <BookingForm isOpenForm={isOpen} closeForm={close} />
      </Container>
    </section>
  );
};

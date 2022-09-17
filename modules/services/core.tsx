import React from 'react';

export const priceList = {
  main: [
    {
      title: 'Консультация',
      price: (
        <>
          <span className="fw-bold">30р</span>
          <br />
          (при проведении процедуры - <span className="fw-bold">бесплатно</span>)
        </>
      ),
    },
    {
      title: 'Ультразвуковая чистка',
      price: <span className="fw-bold">50р</span>,
    },
    {
      title: 'Механическая чистка',
      price: <span className="fw-bold">60р</span>,
    },
    {
      title: 'Комбинированная чистка',
      price: <span className="fw-bold">70р</span>,
    },
    {
      title: 'Комплексная чистка pHformula (с пилингом)',
      price: <span className="fw-bold">90р</span>,
    },
    {
      title: 'Чистка спины',
      price: <span className="fw-bold">70 - 90р</span>,
    },
  ],
  peeling: [
    {
      title: 'C.R. complex (обновление кожи при куперозе, розацеа)',
      price: <span className="fw-bold">75р</span>,
    },
    {
      title: 'А.C. solution (лечение проблемной кожи с АКНЕ)',
      price: <span className="fw-bold">75р</span>,
    },
    {
      title: 'A.G.E. solution (обновление кожи с возрастными изменениями)',
      price: <span className="fw-bold">75р</span>,
    },
    {
      title: 'M.E.L.A. powerclay (обновление кожи с гиперпигментацией)',
      price: <span className="fw-bold">90р</span>,
    },
    {
      title: 'Система сияния с Vita C',
      price: <span className="fw-bold">75р</span>,
    },
    {
      title: 'TCA touch',
      price: <span className="fw-bold">90р</span>,
    },
  ],
  massage: [
    {
      title: 'Классический',
      price: <span className="fw-bold">40р</span>,
    },
    {
      title: 'Лимфодренажный',
      price: <span className="fw-bold">50р</span>,
    },
  ],
  additionToMassage: [
    {
      title: 'Глубокое очищение',
      price: <span className="fw-bold">15р</span>,
    },
    {
      title: 'Альгинатная маска',
      price: <span className="fw-bold">15р</span>,
    },
    {
      title: 'Маска по типу кожи',
      price: <span className="fw-bold">15р</span>,
    },
    {
      title: 'Ампульный концентрат',
      price: <span className="fw-bold">15р</span>,
    },
    {
      title: 'Карбокситерапия',
      price: <span className="fw-bold">40р</span>,
    },
  ],
  other: [
    {
      title: 'Карбокситерапия',
      price: <span className="fw-bold">70р</span>,
    },
    {
      title: 'Фракционная мезотерапия (зависит от препарата)',
      price: <span className="fw-bold">70 - 100р</span>,
    },
    {
      title: 'Уход с коллагеновой биоматрицей',
      price: <span className="fw-bold">60р</span>,
    },
  ],
};

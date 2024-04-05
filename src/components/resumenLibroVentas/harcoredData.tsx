import React from 'react';

const HardcodedData = () => {
  const data = [
    {
      mes: "Enero",
      cantidad: '10.508',
      total: 38132412005.0
    },
    {
      mes: "Febrero",
      cantidad: '12.350',
      total: 50585690399.0
    },
    {
      mes: "Marzo",
      cantidad: '13.047',
      total: 47097655093.0
    },
    {
      mes: "Abril",
      cantidad: '10.842',
      total: 40703661378.0
    },
    {
      mes: "Mayo",
      cantidad: '11.667',
      total: 43060098026.0
    },
    {
      mes: "Junio",
      cantidad: '11.123',
      total: 44834999751.0
    },
    {
      mes: "Julio",
      cantidad: '10.815',
      total: 41468939892.0
    },
    {
      mes: "Agosto",
      cantidad: '13.206',
      total: 46553011634.0
    },
    {
      mes: "Septiembre",
      cantidad: '12.901',
      total: 46395055140.0
    },
    {
      mes: "Octubre",
      cantidad: 13.461,
      total: 47710985578.0
    },
    {
      mes: "Noviembre",
      cantidad: 14.204,
      total: 51406007161.0
    },
    {
      mes: "Diciembre",
      cantidad: 13.652,
      total: 54719338809.0
    }
  ];

  // Formatear los valores de total como pesos colombianos
  const dataFormatted = data.map(item => ({
    ...item,
    total: new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(item.total)
  }));

  return dataFormatted;
};

export default HardcodedData;

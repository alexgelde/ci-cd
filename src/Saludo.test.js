// src/Saludo.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Saludo from './Saludo';

test('muestra el saludo con el nombre correcto', () => {
  render(<Saludo nombre="Mundo" />);
  const saludoElement = screen.getByText(/Hola, Mundo!/i);
  expect(saludoElement).toBeInTheDocument();
});

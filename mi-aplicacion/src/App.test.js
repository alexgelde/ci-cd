import { render, screen } from '@testing-library/react';
import App from './App';
import Saludo from './Saludo';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




test('muestra el saludo con el nombre correcto', () => {
  render(<Saludo nombre="Mundo" />);
  const saludoElement = screen.getByText(/Hola, Mundo!/i);
  expect(saludoElement).toBeInTheDocument();
});

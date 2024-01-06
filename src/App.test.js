import React from 'react';
import { act, render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import App from './App';

// Testuje, czy kalkulator renderuje się z domyślnymi wartościami
test('renders calculator with initial values', () => {
  render(<App />);
  
  // Pobiera elementy z drzewa DOM na podstawie ich ról i etykiet
  const liczba1Input = screen.getByRole('spinbutton', { name: /liczba 1/i });
  const liczba2Input = screen.getByRole('spinbutton', { name: /liczba 2/i });
  const dodajButton = screen.getByRole('button', { name: /dodaj/i });
  const odejmijButton = screen.getByRole('button', { name: /odejmij/i });
  const wynikText = screen.getByText(/wynik/i);

  // Sprawdza, czy elementy są widoczne w drzewie DOM
  expect(liczba1Input).toHaveValue(0);
  expect(liczba2Input).toHaveValue(0);
  expect(dodajButton).toBeInTheDocument();
  expect(odejmijButton).toBeInTheDocument();
  expect(wynikText).toHaveTextContent('Wynik: 0');
});

// Testuje, czy odejmowanie działa poprawnie
test('performs subtraction correctly', async () => {
  render(<App />);
  
  // Pobiera elementy z drzewa DOM na podstawie atrybutów data-testid
  const liczba1Input = screen.getByTestId("liczba1");
  const liczba2Input = screen.getByTestId("liczba2");
  const odejmijButton = screen.getByTestId("odejmij");

  // Symuluje zmiany wartości i kliknięcie przycisku
  fireEvent.change(liczba1Input, { target: { value: '10' } });
  fireEvent.change(liczba2Input, { target: { value: '4' } });
  fireEvent.click(odejmijButton);

  const wynikText = screen.getByText(/wynik/i);

  // Oczekuje na zmiany i sprawdza, czy wynik jest poprawny
  await waitFor(() => {
    expect(wynikText).toHaveTextContent('Wynik: 6');
  });
});


// Testuje, czy dodawanie działa poprawnie
test('performs addition correctly', async () => {
  render(<App />);
  
  // Pobiera elementy z drzewa DOM na podstawie atrybutów data-testid
  const liczba1Input = screen.getByTestId("liczba1");
  const liczba2Input = screen.getByTestId("liczba2");
  const dodajButton = screen.getByTestId("dodaj");

  // Symuluje interakcję użytkownika przy użyciu userEvent
  await act(async () => {
    userEvent.type(liczba1Input, '5');
    userEvent.type(liczba2Input, '3');
    userEvent.click(dodajButton);
  });

  const wynikText = screen.getByText(/wynik/i);

  // Oczekuje na zmiany i sprawdza, czy wynik jest poprawny
  await waitFor(() => {
    expect(wynikText).toHaveTextContent('Wynik: 8');
  });
});

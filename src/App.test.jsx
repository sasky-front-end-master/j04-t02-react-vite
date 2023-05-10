import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

it('Sisältää Kortti-luokkaan kuuluvan elementin', () => {
  const { container } = render(<App />)
  expect(container.querySelector('.Kortti')).toBeInTheDocument();
});

it ('Kortti sisältää h1-otsikoelementin', () => {
  const { container } = render(<App />)
  const kortti = container.querySelector('.Kortti');
  expect(kortti.querySelector('h1')).toBeInTheDocument();
});  

it ('Kortti sisältää tekstikappale-elementin', () => {
  const { container } = render(<App />)
  const kortti = container.querySelector('.Kortti');
  expect(kortti.querySelector('p')).toBeInTheDocument();
});
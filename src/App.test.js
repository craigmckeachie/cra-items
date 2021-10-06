import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  render(<App />);
  // screen.debug();
  screen.getByRole('link', {
    name: /learn react/i,
  });
  const linkElement = screen.getByRole('link', {
    name: /learn react/i,
  });
  expect(linkElement).toBeInTheDocument();
});

//snapshot

test('has a valid snapshot', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

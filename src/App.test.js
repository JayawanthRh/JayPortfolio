import { render, screen } from '@testing-library/react';

jest.mock('./components/projects/Projects', () => () => <div>Projects</div>);
jest.mock('./components/skills/Skills', () => () => <div>Skills</div>);
jest.mock('./components/contact/Contact', () => () => <div>Contact</div>);
jest.mock('./components/experience/Experience', () => () => <div>MockedExperience</div>);

import App from './App';

test('renders Experience section', () => {
  render(<App />);
  const linkElement = screen.getByText(/MockedExperience/i);
  expect(linkElement).toBeInTheDocument();
});

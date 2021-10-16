import { render, screen } from '@testing-library/react';
import App from './App';

describe('Load page and children',()=>{

  
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders Greetings', () => {
    render(<App />);
    const greeetingElement = screen.getByText("Greetings", {exact: true});
    expect(greeetingElement).toBeInTheDocument();
  });
  
});
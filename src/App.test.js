import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

describe('Load page and children',()=>{

  
  test('renders learn react link', () => {
    render(<Provider store={store}><App /></Provider>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders Greetings', () => {
    render(<Provider store={store}><App /></Provider>);
    const greeetingElement = screen.getByText("Greetings", {exact: false});
    expect(greeetingElement).toBeInTheDocument();
  });
  
});
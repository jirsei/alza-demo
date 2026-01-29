import { render, queryByAttribute } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the demo Vite text', () => {
    const dom = render(<App />);
    const getById = queryByAttribute.bind(null, 'id');

    expect(getById(dom.container, 'app-row-header')).toBeInTheDocument();
    expect(getById(dom.container, 'app-row-content')).toBeInTheDocument();
  });
});

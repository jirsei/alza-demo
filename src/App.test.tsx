import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the header and content', () => {
    const wrapper = render(<App />);
    const header = wrapper.container.querySelector(
      '#app-row-header',
    ) as HTMLButtonElement;
    const content = wrapper.container.querySelector(
      '#app-row-header',
    ) as HTMLButtonElement;

    expect(header).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});

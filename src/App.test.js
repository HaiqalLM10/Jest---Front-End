import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Query DOM', async () => {
    render(<App />);

    const linkElement = await screen.findByText("React Axios example - netlify 11/06/2022");
    expect(linkElement).toBeInTheDocument();
})
import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument();
})

test('Greet renders with a name', () => {
    render(<Greet name='Mithu' />)
    const textElement = screen.getByText('Hello Mithu')
    expect(textElement).toBeInTheDocument()
})
import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

describe('Greet', ()=> {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument();
    })
    describe('Nested', () => {
        test('renders correctly 1', () => {
            render(<Greet />)
            const textElement = screen.getByText('Hello')
            expect(textElement).toBeInTheDocument();
        })
    })
})
describe('Multiple', () => {
    test('renders correctly 2', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument();
    })
})
describe.skip('Greet : Group name', () => {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument();
    })
    
    test('renders with a name', () => {
        render(<Greet name='Mithu' />)
        const textElement = screen.getByText('Hello Mithu')
        expect(textElement).toBeInTheDocument()
    })
})
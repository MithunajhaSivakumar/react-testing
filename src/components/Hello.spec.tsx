import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';

//test == it - to test
//fit - to focus on particular test
//xit - to skip on particular test
describe('Hello', ()=> {
    fit('Hello file', () => {
        render(<Hello />)
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument();
    })
})
describe('Hello 2', ()=> {
    fit('Hello file', () => {
        render(<Hello />)
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument();
    })
})

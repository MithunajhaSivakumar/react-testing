import {render, screen} from '@testing-library/react'
import Application from "./Application";

describe('Application', ()=> {
    test('render correctly', () => {
        render(<Application/>)

        // const pageHeading = screen.getByRole('heading', {
        //     name: 'Job Application Form'
        // });
        // expect(pageHeading).toBeInTheDocument();

        // const sectionHeading = screen.getByRole('heading', {
        //     name: 'Section 1'
        // });

        const pageHeading = screen.getByRole('heading', {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        const paragraphElement = screen.getByText('All elements are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        const paragraphElement2 = screen.getByText(/all elements are mandatory/i);
        expect(paragraphElement2).toBeInTheDocument();

        const paragraphElement3 = screen.getByText(/^all elements are mandatory$/i);
        expect(paragraphElement3).toBeInTheDocument();

        const paragraphElement4 = screen.getByText((content) => content.startsWith('All'));
        expect(paragraphElement4).toBeInTheDocument();

        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        const imageElement = screen.getByAltText('Hello World');
        expect(imageElement).toBeInTheDocument();

        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name:'Name',
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name',{
            selector: 'input',
        });
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText('Fullname');
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue('Mithunajha');
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name:'Bio',
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to terms and conditions');
        expect(termsElement2).toBeInTheDocument();

        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();
    })
})
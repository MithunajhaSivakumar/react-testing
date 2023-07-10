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
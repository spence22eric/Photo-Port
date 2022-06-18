import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..'

afterEach(cleanup)

describe('Contact form', () => {
    it('renders', () => {
        <ContactForm />
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('form title visible', () => {
    it('inserts text into h1', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    })
})

describe('button text visible', () => {
    it('inserts button text', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('contact-button')).toHaveTextContent('Submit')
    })
})
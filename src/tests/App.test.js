import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('Test for App', ()=>{

    test('Test Rendering', () => {
        const {getByTestId} = render(<App />);
        expect(getByTestId('content')).toBeInTheDocument();

    });

});
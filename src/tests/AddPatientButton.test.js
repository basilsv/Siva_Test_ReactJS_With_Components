import React from 'react';
import App from '../App';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';



describe('Test for Add Patient Button Exists', ()=>{

    test('Test Rendering Add Patient Button Exists', () => {
        const {getByTestId} = render(<App />);
        expect(getByTestId('addPatientButton')).toBeInTheDocument();
  
       // const {getByTestId} = render(<AnimatedModal refreshListState={mockFunction} />);
       // expect(getByTestId('addPatientForm')).toBeInTheDocument();

    });

});
import React from 'react';
import App from '../App';
import '@testing-library/jest-dom';
import {render, queryByAttribute} from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Button} from '../components/ButtonComponents';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


Enzyme.configure({adapter: new Adapter()});




describe('Test for Add Patient Button Click', ()=>{

    test('Test Rendering Add Patient Button Click', () => {
        render(<App />);
        const button = screen.getByTestId('addPatientButton') 
        userEvent.click(button);       
    });

});
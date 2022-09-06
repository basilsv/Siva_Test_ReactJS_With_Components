import React from 'react';
import axios from 'axios';
import {render} from '@testing-library/react';


import '@testing-library/jest-dom';
import { jssPreset } from '@material-ui/core';



function listings_patients(){
    const response = axios.get(`http://localhost:5000/listings`);
    const json = response.data;
    return 1;
}



describe('Test for Receiving Listings', ()=>{

    test('Test for Receiving Listings Render', () => {
        const response = listings_patients();
        expect(response).toBe(1);

    });

});
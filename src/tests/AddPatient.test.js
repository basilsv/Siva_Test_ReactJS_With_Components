import React from 'react';
import AnimatedModal from '../components/animated-modal.component';
import '@testing-library/jest-dom';
import enableHooks from 'jest-react-hooks-shallow';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

// pass an instance of jest to `enableHooks()`
enableHooks(jest);

describe('Test for Add Patient', ()=>{

    test('Test Rendering Add Patient', () => {
        const mockFunction = jest.fn();
        const wrapper = shallow(<AnimatedModal refreshListState={mockFunction} />);
        expect(wrapper.find('#addPatientForm').exists()).toBe(true);
  
       // const {getByTestId} = render(<AnimatedModal refreshListState={mockFunction} />);
       // expect(getByTestId('addPatientForm')).toBeInTheDocument();

    });

});
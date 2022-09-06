import React, { useState } from 'react';
//import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import axios from 'axios';
import {Button} from './ButtonComponents';
import {APP_DEV_BASE_URL} from '../configs/apiconfig';





const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid white',
        borderRadius:'0.3em',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

/*

  Styles for the Modal is modified above
  This is the addPatient modal to add patient on clicking ADD PATIENT Button on home page

  The refreshListstate function is actually a parent class function but is passed to the modal so
  we can refresh the listings on the page without actually refreshing the page. So the result is dynamic just 
  by passing functions

  addPatientSubmit Function has the form validation before submitting and adding to database
  If the input is erroneous the errors fire on the form and prevent submission
  On closing the form or clicking outside the form closes as it detects that event.

  The errors fire while changing the form so each form field has an onchange linked to it Name,Phone,Email
  as handleNameChange,handleEmailChange,handlePhoneChange
  The errors fire as a javscript local function that triggers on setting and resetting the [field-name]Error variables.

  Imported ENV variable from config js file its easier to config that way.
*/



const Container = styled.div`
text-align: left;
`;
export default function AnimatedModal({refreshListState}) {
  
  const [nameValid,setNameValid] = useState('');
  const [nameError, setNameError] = useState(null);
  const [emailValid, setEmailValid] = useState('');
  const [phoneValid, setPhoneValid] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  function isValidEmail(email) {
    //Email Regex to test the email
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleNameChange = event => {
    //IF name is empty set error
    if(event.target.value.length===0){
      setNameError("Name is Empty");
    }
    else{
      setNameError(null);
    }
    //set Current state of name variable on every change
    setNameValid(event.target.value);
  }

  function isValidPhone(phone) {
    //Phone numbers have a lot of different regex but just filtering by length and returning true or false
    if(phone.length>=9){
        return true;
    }
    return false;
  }

  const handleEmailChange = event => {
    //On Email Change check if valid --setError
    if (!isValidEmail(event.target.value)) {
        setEmailError('Email is invalid');
    //On Email Change check if empty --setError    
        if(event.target.value.length === 0){
          setEmailError('Email is Empty');
        }
    }
     else {
        setEmailError(null);
    }

    setEmailValid(event.target.value);
  };


  const handlePhoneChange = event => {
    //Check Phone Validation and Empty
    if (!isValidPhone(event.target.value)) {
        setPhoneError('Phone Number is invalid');
        if(event.target.value.length === 0){
          setPhoneError('Phone Number is Empty');
        }
    } 
    
    else {
        setPhoneError(null);
    }

    setPhoneValid(event.target.value);
  };

  //open,setOpen controls the state for open and close and is set on interaction
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  //function for open,close interactions  
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
      refreshvalues();
      refresherrors();
        setOpen(false);
    };
// functions for refreshing errors and current field value states - nameValid,nameError....
    const refresherrors = () => {
      setNameError(null);
      setPhoneError(null);
      setEmailError(null);
    }

    const refreshvalues = () => {
      setNameValid("");
      setEmailValid("");
      setPhoneValid("");
    }
    //Add Patient that fires on form submission here also there is validation aside from the onChange to reflect in real time.
    const addPatientSubmit = async(e) => {
      e.preventDefault();
      if(nameValid!=="" && emailValid!=="" && phoneValid!=="" && emailError ==null && phoneError == null && nameError == null){
        await axios.post(APP_DEV_BASE_URL+'listings/addPatient', {
          email: emailValid,
          name: nameValid,
          phone: phoneValid,
         }); 
         handleClose();
         refreshvalues();
      }
      else{
        refresherrors();

        if(nameValid.length===0){
          setNameError("Name is Empty");
        }
        if(emailValid.length===0){
          setEmailError("Email is Empty");
        }
        if(phoneValid.length===0){
          setPhoneError("Phone is Empty");
        }
    
          setPhoneError("Clear Errors before submitting! ");
    
      }
      refreshListState();

    }



    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleOpen} id="addPatientButton">
                <span data-testid="addPatientButton">ADD PATIENT</span>
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                animation="false"
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                    <Container>
 
                    <h3 style={{textAlign:"center",color:"var(--purple-color-primary)",fontSize:"2em",padding:"0.8em"}}>Add Patient</h3>
        <form noValidate id="addPatientForm" autoComplete="off" onSubmit = {addPatientSubmit} data-testid="addPatientForm">
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor='firstName'>Name</label>
              <input
                className='form-control'
                placeholder='Name'
                type='text'
                name='name'
                value={nameValid}
              onChange={handleNameChange}
                noValidate
                style={{textAlign:"center",border: '1px solid var(--grey-color-secondary)',margin:"1em",boxShadow:"1px 3px 1px var(--grey-color-secondary)"
            }}
              />
              {nameError && <h2 style={{color: 'red',fontSize:"0.5em"}}>{nameError}</h2>}
            </div>
          </div>
 
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              className='form-control'
              placeholder='Email'
              type='email'
              name='email'
              value={emailValid}
              onChange={handleEmailChange}
              noValidate
              style={{textAlign:"center",border: '1px solid var(--grey-color-secondary)',margin:"1em",boxShadow:"1px 3px 1px var(--grey-color-secondary)"
            }}
              
            />
             {emailError && <h2 style={{color: 'red',fontSize:"0.5em"}}>{emailError}</h2>}
          </div>
          <div className='mb-3'>
            <label htmlFor='phone'>Phone:</label>
            <input
              className='form-control'
              placeholder='Phone'
              type='number'
              name='phone'
              value={phoneValid}
              onChange={handlePhoneChange}
              noValidate
              style={{textAlign:"center",border: '1px solid var(--grey-color-secondary)',margin:"1em",boxShadow:"1px 3px 1px var(--grey-color-secondary)"
            }}
            />
             {phoneError && <h2 style={{color: 'red',fontSize:"0.5em"}}>{phoneError}</h2>}
          </div>
          
          <div className='mb-3' style={{textAlign:"center"}}>
            <Button type='submit'>Add Patient</Button>
          </div>

        </form>
      
    </Container>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
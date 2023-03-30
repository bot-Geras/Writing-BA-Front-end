import React, { useState } from 'react';
import InstructSignUpForm from '../../components/InstructorSignUp/InstructSignUpForm';
import Banner from '../../assets/images/InstructSignUp'
import './InstructorSignUp.css'

const InstructorSignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        citizenship: '',
        is_native_speaker: false,
        years_teaching: '',
        course: '',
        selfIntroVideo: ''
      });
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData); 
        // Do something with the form data
      };
    
      const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
  return (
    <div className='form-container'>
        <img src={Banner} alt="" />
        <InstructSignUpForm
        handleFormSubmit = {handleFormSubmit}
        handleInputChange = {handleInputChange}
        formData = {formData}
        />
    </div>
  )
}

export default InstructorSignUp

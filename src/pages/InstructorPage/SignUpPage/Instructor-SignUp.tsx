import React, { useState,lazy, Suspense } from 'react';
import Banner from '../../../assets/images/InstructSignUp.jpg'
import './InstructorSignUp.css'
const LazyInstructorSignUpForm = lazy(() => import('../../../components/InstructorForms/InstructorSignUpForm'));

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

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData); 
    // Do something with the form data
  };

  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div  className='form-container'>
      <img src={Banner} alt='Banner'/>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyInstructorSignUpForm handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} formData={formData} />
      </Suspense>
      </div>
      
    </div>
  );
};

export default InstructorSignUp;
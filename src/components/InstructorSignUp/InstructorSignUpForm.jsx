import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";

const InstructorSignUpForm = ({handleFormSubmit,handleInputChange,formData}) => {
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
          <h3>Register As A Instructor</h3>
          <div className="form-group">
              <div className='form-field'>
                <label htmlFor='firstname'></label>
                <input 
                  id='firstname'
                  type="text" 
                  placeholder='First Name' 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleInputChange} 
                  required
                />
              </div>
              <div className='form-field'>
                <label htmlFor='lastname'></label>
                <input 
                  id='lastname'
                  type="text" 
                  placeholder='Last Name' 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleInputChange} 
                  required
                />
              </div>
          </div>
          <div className="form-group">
            <div className='form-field'>
              <label htmlFor='email'></label>
              <input 
                id='email'
                type="email" 
                placeholder='Email' 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='password'></label>
              <input 
                id='password'
                type="password" 
                placeholder='Password' 
                name="password" 
                value={formData.password} 
                onChange={handleInputChange} 
                required
              />
            </div>
          </div>
          
          <div className='form-field'>
            <label htmlFor='is_native_speaker'>
              <input 
                id='is_native_speaker'
                type="checkbox" 
                name="is_native_speaker" 
                value={formData.is_native_speaker} 
                onChange={handleInputChange} 
                required
              />
              <b>I'm a native English speaker</b> 
            </label>
          </div>
          <div className='form-field'>
            <label htmlFor='citizenship'>
              Citizenship
              <input 
                id='citizenship'
                type="text" 
                name="citizenship" 
                placeholder='Country'
                value={formData.citizenship} 
                onChange={handleInputChange} 
                required
              />
            </label>
          </div>
          <div className='form-field'>
            <label htmlFor='years_teaching'>How many years of teaching experience do you have?</label>
            <input 
              id='years_teaching'
              type="number" 
              name="years_teaching" 
              value={formData.years_teaching} 
              onChange={handleInputChange} 
              required
            />
          </div>
          <div className='form-field'>
            <label htmlFor='course'> What Course Would you like to teach?</label>
            <input 
              id='course'
              type="text" 
              name="course" 
              value={formData.course} 
              onChange={handleInputChange} 
              required
            />
          </div>
          <div className='self-intro' style={{display: 'flex'}}>
            <div>
              <h5><b>Upload Your Self-intro Video (~ 3 min)</b></h5>
              <h6>Tell us about:</h6>
              <p>Who are you?</p>
              <p>What is your teaching style?</p>
              <p>What is your course syllabus</p>
            </div>
            <div className="upload-input">
              <input 
                type="file" 
                id="upload-file" name="selfIntroVideo"
              />
              <label htmlFor="upload-file">
                <FaCloudUploadAlt className="upload-icon" />
              </label>
            </div>
          </div>
          
          <input type="submit" value={`SignUp`}/>
        </form>
    </div>
  )
}

export default InstructorSignUpForm

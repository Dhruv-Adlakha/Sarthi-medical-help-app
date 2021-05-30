import React from 'react';
import Navbar from '../Layout/Navbar';

function About() {
  return (
    <div>
      <Navbar />
      <div className='about'>
        <p>
          Sarthi is a medical help application, we try to connect the needy
          people to the doctors and volunteers.
        </p>
        <div className='about-section'>
          <div className='partition'>
            <h3>For Needy people</h3>
            <ul>
              <li>Sign up or login in the application</li>
              <li>
                Submit the required documents to verify your profile from Sarthi
                Admin
              </li>
              <li>Go to Illness section and enter the problem</li>
              <li>Wait for the volunteer to be assigned</li>
              <li>
                The volunteer will take you to the doctor and the medicines will
                be delivered free later.
              </li>
            </ul>
          </div>
          <div className='partition'>
            <h3>For Volunteers</h3>
            <ul>
              <li>Sign up or login in the application</li>
              <li>
                Choose between the options - Doctor visit, Medical delivery and
                Donate money
              </li>
              <li>Based on the options choosen proceed.</li>
              <li>You can get your service history in your profile</li>
            </ul>
          </div>
          <div className='partition'>
            <h3>For Doctors</h3>
            <ul>
              <li>Sign up or login in the application</li>
              <li>
                Submit the required documents to verify your profile from Sarthi
                Admin
              </li>
              <li>
                Once the profile is verified the patient requests will be
                automatically directed to you.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

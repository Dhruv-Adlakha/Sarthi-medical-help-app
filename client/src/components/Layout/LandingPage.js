import React from 'react';
import landingPageImage from '../../images/landingPage.jpg';

const LandingPage = () => {
  return (
    <div>
      <div className='landingPage__section'>
        <img src={landingPageImage} alt='' />
        <div className='landingPage__section__content'>
          <h2>Sarthi</h2>
          <ul>
            <li>Sarthi is a medical help application.</li>
            <li>
              If you need medical help and cannot afford the cost we will help
              you.
            </li>
            <li>
              People can volunteer for hospital visits, medicine delivery and
              donations
            </li>
            <li>
              Doctors can help by providing free checkup facility for the needy
            </li>
          </ul>
          <div className='landingPage__section__content__buttons'>
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

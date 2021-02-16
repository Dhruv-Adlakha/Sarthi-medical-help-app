import React, { useState, useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import PatientRequestElement from './PatientRequestElement';
import { connect } from 'react-redux';

function PatientRequests(props) {
  const [serviceRequests, setServiceRequests] = useState([]);
  useEffect(async () => {
    console.log(props.requests);
    const req = props.requests.filter((e) => {
      return e.applicationStatus === 1;
    });
    const newArr = req.map((e) => {
      const needyPerson = props.needy.find((f) => {
        return e.patient === f._id;
      });
      return {
        name: needyPerson.name,
        address: needyPerson.address,
      };
    });
    console.log(newArr);
    await setServiceRequests(() => newArr);
    console.log(serviceRequests);
  });
  return (
    <div>
      <Navbar />
      <div className='volunteerRequests'>
        <h2>Requests</h2>
        <div className='section'>
          <div>
            <h3>Service request</h3>
            <div className='volunteerRequestsElements'>
              {serviceRequests.length &&
                serviceRequests.map((request, index) => {
                  return (
                    <PatientRequestElement
                      name={request.name}
                      address={request.address}
                    />
                  );
                })}
            </div>
          </div>
          <div>
            <h3>Donation request</h3>
            <div className='volunteerRequestsElements'>
              {/* <PatientRequestElement />
              <PatientRequestElement />
              <PatientRequestElement /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    requests: state.needyReducer.requests,
    needy: state.adminReducer.needy,
  };
};

export default connect(mapStateToProps)(PatientRequests);

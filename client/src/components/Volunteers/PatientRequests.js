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
      console.log(needyPerson);
      if (needyPerson) {
        return {
          name: needyPerson.name,
          address: needyPerson.address,
          _id: e._id,
        };
      }
    });
    console.log(newArr);
    await setServiceRequests(() => newArr);
    console.log(serviceRequests);
  }, [props.requests]);
  return (
    <div>
      <Navbar />
      <div className='volunteerRequests'>
        <h2>Requests</h2>
        <div className='section'>
          <div>
            <h3>Service request</h3>
            <div className='volunteerRequestsElements'>
              {serviceRequests &&
                serviceRequests.length &&
                serviceRequests.map((request, index) => {
                  return (
                    <PatientRequestElement
                      name={request && request.name}
                      address={request && request.address}
                      _id={request && request._id}
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

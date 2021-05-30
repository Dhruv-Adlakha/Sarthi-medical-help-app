import React, { useState, useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import PatientRequestElement from './PatientRequestElement';
import { connect } from 'react-redux';

function PatientRequests(props) {
  const [serviceRequests, setServiceRequests] = useState([]);
  const [donationRequests, setDonationRequests] = useState([]);
  useEffect(async () => {
    const req = props.requests.filter((e) => {
      return e.applicationStatus === 2 || e.applicationStatus === 5;
    });
    const newArr = req.map((e) => {
      const needyPerson = props.needy.find((f) => {
        return e.patient === f._id;
      });
      const doctorAttending = props.doctors.find((f) => {
        return e.doctor === f._id;
      });
      if (needyPerson && doctorAttending) {
        return {
          name: needyPerson.name,
          address: needyPerson.address,
          doctor: doctorAttending.name,
          hospital: doctorAttending.hospital,
          applicationStatus: e.applicationStatus,
          _id: e._id,
        };
      }
    });
    await setServiceRequests(() => newArr);

    const req2 = props.requests.filter((e) => {
      return e.applicationStatus === 4;
    });
    const newArr2 = req2.map((e) => {
      const needyPerson = props.needy.find((f) => {
        return e.patient === f._id;
      });
      const doctorAttending = props.doctors.find((f) => {
        return e.doctor === f._id;
      });
      if (needyPerson && doctorAttending) {
        return {
          name: needyPerson.name,
          address: needyPerson.address,
          doctor: doctorAttending.name,
          hospital: doctorAttending.hospital,
          applicationStatus: e.applicationStatus,
          amount: e.prescription.length * 47,
          _id: e._id,
        };
      }
    });
    await setDonationRequests(() => newArr2);
  }, [props]);
  return (
    <div>
      <Navbar />
      <div className='doctorRequestsSpliter'>
        <div>
          <h3>Service request</h3>
          <div className='doctorRequests'>
            <div>
              <div>
                {serviceRequests &&
                  serviceRequests.length &&
                  serviceRequests.map((request, index) => {
                    return (
                      <PatientRequestElement
                        name={request && request.name}
                        address={request && request.address}
                        doctor={request && request.doctor}
                        hospital={request && request.hospital}
                        applicationStatus={request && request.applicationStatus}
                        _id={request && request._id}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>Donation request</h3>

          <div className='doctorRequests'>
            {donationRequests &&
              donationRequests.length &&
              donationRequests.map((request, index) => {
                return (
                  <PatientRequestElement
                    name={request && request.name}
                    address={request && request.address}
                    doctor={request && request.doctor}
                    hospital={request && request.hospital}
                    applicationStatus={request && request.applicationStatus}
                    amount={request && request.amount}
                    _id={request && request._id}
                  />
                );
              })}
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
    doctors: state.adminReducer.doctors,
  };
};

export default connect(mapStateToProps)(PatientRequests);

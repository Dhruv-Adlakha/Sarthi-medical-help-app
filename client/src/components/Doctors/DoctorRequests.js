import React, { useEffect, useState } from 'react';
import Navbar from '../Layout/Navbar';
import DoctorRequest from '../Doctors/DoctorRequest';
import { connect } from 'react-redux';

function DoctorRequests(props) {
  const [unacceptedRequests, setunacceptedRequests] = useState([]);
  const [acceptedRequests, setacceptedRequests] = useState([]);
  console.log(props.requests);
  useEffect(() => {
    setunacceptedRequests(() => {
      return props.requests.filter((e) => e.applicationStatus === 1);
    });
    setacceptedRequests(() => {
      return props.requests.filter((e) => e.applicationStatus === 3);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className='doctorRequestsSpliter'>
        <div>
          <h2>Patient requests</h2>
          <div className='doctorRequests'>
            {unacceptedRequests.map((e) => (
              <DoctorRequest
                problem={e.problem}
                description={e.description}
                applicationStatus={e.applicationStatus}
                patient={props.needy.find((e2) => {
                  return e.patient === e2._id;
                })}
                id={e._id}
              />
            ))}
          </div>
        </div>
        <div>
          <h2>Accepted requests</h2>
          <div className='doctorRequests'>
            {acceptedRequests.map((e) => (
              <DoctorRequest
                problem={e.problem}
                description={e.description}
                applicationStatus={e.applicationStatus}
                patient={props.needy.find((e2) => {
                  return e.patient === e2._id;
                })}
                id={e._id}
              />
            ))}
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
    currUser: state.authReducer.currUser,
  };
};

export default connect(mapStateToProps)(DoctorRequests);

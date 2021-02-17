import React, { useEffect, useState } from 'react';
import Navbar from '../Layout/Navbar';
import DoctorRequest from '../Doctors/DoctorRequest';
import { connect } from 'react-redux';

function DoctorRequests(props) {
  const [drequests, setDrequests] = useState([]);
  console.log(props.requests);
  useEffect(() => {
    setDrequests(() => {
      return props.requests.filter((e) => e.applicationStatus === 1);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className='doctorRequests'>
        <h2>Patient requests</h2>
        {drequests.map((e) => (
          <DoctorRequest
            problem={e.problem}
            description={e.description}
            patient={props.needy.find((e2) => {
              return e.patient === e2._id;
            })}
            id={e._id}
          />
        ))}
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

export default connect(mapStateToProps)(DoctorRequests);

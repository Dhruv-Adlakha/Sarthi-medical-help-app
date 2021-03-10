import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';
import ServiceHistoryElement from '../ExtraPages/ServiceHistoryElement';

function VolunteerMyProfile(props) {
  const [visitServices, setVisitServices] = useState([]);
  const [deliveryServices, setDeliveryServices] = useState([]);
  useEffect(() => {
    const arr = props.requests.filter((e) => {
      return (
        e.volunteers &&
        e.volunteers[0] &&
        e.volunteers[0]._id === props.currUser._id
      );
    }, []);
    const brr = arr.map((e) => {
      return {
        ...e,
        needy: props.needy.find((f) => {
          return f._id === e.patient;
        }),
      };
    });
    setVisitServices(() => brr);

    const crr = props.requests.filter((e) => {
      return (
        e.volunteers &&
        e.volunteers[1] &&
        e.volunteers[1]._id === props.currUser._id
      );
    });
    const drr = crr.map((e) => {
      return {
        ...e,
        needy: props.needy.find((f) => {
          return f._id === e.patient;
        }),
      };
    });
    setDeliveryServices(() => drr);
    console.log(brr, drr);
  });
  return (
    <div>
      <Navbar />
      <div className='myProfile'>
        <div className='profileDescription'>
          <h2>My Profile</h2>
          <div className='content'>
            <div className='contentPane'>
              <p>
                <span>Name</span>
              </p>
              <p>{props.currUser.name}</p>
            </div>

            <div className='contentPane'>
              <p>
                <span>Age</span>
              </p>
              <p>{props.currUser.age}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Address</span>
              </p>
              <p>{props.currUser.address}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Phone</span>
              </p>
              <p>{props.currUser.phone}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Total service count</span>
              </p>
              <p>{visitServices.length + deliveryServices.length}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Profile verified</span>
              </p>
              <p>{props.currUser.profileVerified}</p>
            </div>
          </div>
          <Link to='/volunteers/profiles/updateProfile' className='btn'>
            Update profile
          </Link>
        </div>
        <div className='serviceHistory'>
          <h2>Service history</h2>
          <div className='content'>
            {visitServices &&
              visitServices.map((e, index) => (
                <ServiceHistoryElement
                  index={index + 1}
                  name={e.needy.name}
                  query={0}
                />
              ))}
            {deliveryServices &&
              deliveryServices.map((e, index) => (
                <ServiceHistoryElement
                  index={visitServices.length + index + 1}
                  name={e.needy.name}
                  query={1}
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
    currUser: state.authReducer.currUser,
    requests: state.needyReducer.requests,
    needy: state.adminReducer.needy,
  };
};

export default connect(mapStateToProps)(VolunteerMyProfile);

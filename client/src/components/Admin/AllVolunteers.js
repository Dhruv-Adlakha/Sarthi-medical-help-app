import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import VolunteerProfile from '../Admin/VolunteerProfile';
import Navbar from '../Layout/Navbar';
import { getVolunteers } from '../../redux/actions/Admin';

function AllVolunteers(props) {
  useEffect(() => {
    props.dispatch(getVolunteers());
  }, []);
  return (
    <div>
      <Navbar />
      <div className='profiles'>
        <h2>Volunteers</h2>
        <div className='cardsPane'>
          {props.volunteers &&
            props.volunteers.map((volunteer, index) => {
              return <VolunteerProfile key={index} volunteer={volunteer} />;
            })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    volunteers: state.adminReducer.volunteers,
  };
};

export default connect(mapStateToProps)(AllVolunteers);

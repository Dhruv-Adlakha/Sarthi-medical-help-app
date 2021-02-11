import React from 'react';
import Navbar from '../Layout/Navbar';

function CurrentVisit() {
  return (
    <div>
      <Navbar />

      <div className='currentVisit'>
        <div className='volunteer'>
          <h2>Volunteering Doctor</h2>
          <p>Dr. Manish kriplani</p>
        </div>
        <div className='status'>
          <h2>Current visit status</h2>
          <div className='statusBars'>
            <div className='statusBarsElement done'>Application completed</div>
            <div className='statusBarsElement done'>Volunteer assigned</div>
            <div className='statusBarsElement done'>Volunteer at home</div>
            <div className='statusBarsElement'>Doctor visit done</div>
            <div className='statusBarsElement'>Medicines ready to deliver</div>
            <div className='statusBarsElement'>Medicines delivered</div>
          </div>

          <div className='depictor'>
            <p>
              <span className='green'>Green:</span> Complete
            </p>
            <p>
              <span className='red'>Red:</span>Incomplete
            </p>
          </div>
        </div>
        <div className='volunteer'>
          <h2>Volunteers</h2>
          <div>
            <h3>Doctor visit</h3>
            <p>Ravi sharma</p>
          </div>
          <div>
            <h3>Medicine delivery</h3>
            <p>Ibrahim haq</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentVisit;

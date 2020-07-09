import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>HR System</p>
      </header>
      <div className="data">
        <div className="table-header">
          <div className='employee-id'>Employee Id</div>
          <div className='first-name'>First Name</div>
          <div className='last-name'>Last Name</div>
          <div className='email'>Email</div>
          <div className='gender'>Gender</div>
          <div className='race'>Race</div>
          <div className='age'>Age</div>
          <div className='job-title'>Job Title</div>
          <div className='department'>Department</div>
        </div>
        <div className="table-data">
          <div className='employee-id'>1</div>
          <div className='first-name'>Chuck</div>
          <div className='last-name'>Daubeny</div>
          <div className='email'>cdaubeny0@vistaprint.com</div>
          <div className='gender'>Male</div>
          <div className='race'>Prefer Not to Answer</div>
          <div className='age'>7/19/1984</div>
          <div className='job-title'>Senior Editor</div>
          <div className='department'>Marketing</div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';

const TableDataItem = ({ data }) => (
  <div className="table-data">
    <div className='employee-id'>{data.employeeId}</div>
    <div className='first-name'>{data.firstName}</div>
    <div className='last-name'>{data.lastName}</div>
    <div className='email'>{data.email}</div>
    <div className='gender'>{data.gender}</div>
    <div className='race'>{data.race}</div>
    <div className='age'>{data.age}</div>
    <div className='job-title'>{data.jobTitle}</div>
    <div className='department'>{data.department}</div>
  </div>
);

export default TableDataItem;
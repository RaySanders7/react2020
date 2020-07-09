import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableDataItem from './TableDataItem';
import SearchBar from './SearchBar';
import { useEffect } from 'react';
import tempData from './data/tempData.json'

const EmployeeData = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    setEmployeeData(tempData);
  }, []);

  return (
    <div className="data">
      <SearchBar />
      <TableHeader />
      {
        employeeData.map(e => <TableDataItem key={e.employeeId} data={e} />)
      }
    </div>
)};

export default EmployeeData;
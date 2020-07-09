import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableDataItem from './TableDataItem';
import SearchBar from './SearchBar';
import { useEffect } from 'react';
import tempData from './data/tempData.json'

const EmployeeData = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    setEmployeeData(tempData);
  }, []);

  const onFilterTextChange = text => setFilterText(text);

  return (
    <div className="data">
      <SearchBar filterText={filterText} onFilterTextChange={onFilterTextChange} />
      <TableHeader />
      {
        employeeData.map(e => <TableDataItem key={e.employeeId} data={e} />)
      }
    </div>
)};

export default EmployeeData;
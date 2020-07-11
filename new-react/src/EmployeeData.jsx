import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableDataItem from './TableDataItem';
import SearchBar from './SearchBar';
import { useEffect } from 'react';
import tempData from './data/tempData.json'
import NoResults from './NoResults';

const EmployeeData = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [filterText, setFilterText] = useState('');
  
  const containsFilterText = (data, filterText) => {
    return data.firstName.toLowerCase().includes(filterText)
    || data.lastName.toLowerCase().includes(filterText)
    || data.email.toLowerCase().includes(filterText);
  }
  useEffect(() => {
    const results = tempData.filter(td =>
      containsFilterText(td, filterText)
    );
    setEmployeeData(results);
  }, [filterText]);

  const onFilterTextChange = text => {
    setFilterText(text);
  }

  return (
    <div className="data">
      <SearchBar filterText={filterText} onFilterTextChange={onFilterTextChange} />
      {
        employeeData.length > 0 ? (
          <>
            <TableHeader />
            {
              employeeData.map(e => <TableDataItem key={e.employeeId} data={e} />)
            }
          </>
        ) : <NoResults />
      }
    </div>
)};

export default EmployeeData;
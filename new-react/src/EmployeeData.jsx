import React from 'react';
import TableHeader from './TableHeader';
import TableDataItem from './TableDataItem';
import SearchBar from './SearchBar';

// TODO: State Lives Here
const EmployeeData = () => (
  <div className="data">
    <SearchBar />
    <TableHeader />
    <TableDataItem />
  </div>
);

export default EmployeeData;
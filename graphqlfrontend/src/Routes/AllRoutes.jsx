import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Quotes from '../compnents/Quotes';
import QuotesAdd from '../compnents/QuotesAdd';
import QuotesEdit from '../compnents/QuotesEdit';


function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Quotes />} />
        <Route path='/add' element={<QuotesAdd />} />
        <Route path='/edit/:id' element={<QuotesEdit />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;

import React from 'react';
import ReportPage from './Components/ReportPage/ReportPage';
import { Route, Routes } from 'react-router-dom';
import Main from "../src/Components/Main/Main"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Report/Page' element={<ReportPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

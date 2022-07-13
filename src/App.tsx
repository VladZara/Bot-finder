import React from 'react';
import Main from './Components/Main/Main';
import PopUp from './Components/PopUp/PopUp';
import ReportPage from './Components/ReportPage/ReportPage';
import {getImage, getReports} from "./API";
import { Route, Routes } from 'react-router-dom';




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

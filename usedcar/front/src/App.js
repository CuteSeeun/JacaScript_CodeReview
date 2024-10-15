import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout';
import CarListMain from './components/mainhj/CarListMain';
import GlobalStyle from './styles/GlobalStyle';
import DetailMain from './components/detail/DetailMain';
import DetailUser from './components/detail/DetailUser';

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CarListMain/>}/>
          {/* <Route index element={<CarListMain/>}/> */}
          <Route path='/detailmain/:id' element={<DetailMain/>}/>
          <Route path='/detailuser/:id' element={<DetailUser/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout';
import CarListMain from './components/mainhj/CarListMain';
import GlobalStyle from './styles/GlobalStyle';
import DetailMain from './components/detail/DetailMain';
import DetailUser from './components/detail/DetailUser';
import Add from './components/add/Add';

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<DetailUser/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
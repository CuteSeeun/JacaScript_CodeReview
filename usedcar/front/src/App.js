import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CarListMain from "./components/mainhj/CarListMain";
import GlobalStyle from "./styles/GlobalStyle";
import DetailMain from "./components/detail/DetailMain";
import DetailUser from "./components/detail/DetailUser";
import Add from "./components/add/Add";
import CarListOutput from "./components/mainhj/CarListOutput";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Edit/>}/> */}
            {/* <Route index element={<Detail/>}/> */}
            {/* <Route index element={<Add />} /> */}
            <Route index element={<CarListOutput />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CarListMain from "./components/mainhj/CarListMain";
import GlobalStyle from "./styles/GlobalStyle";
import DetailMain from "./components/detail/DetailMain";
import DetailUser from "./components/detail/DetailUser";
import Add from "./components/add/Add";
import CarListOutput from "./components/mainhj/CarListOutput";
import Login from "./components/login/login";
import Join from "./components/join/join";
import MyPage from "./components/mypage/mypage";
import Header from "./components/header/Header";
import EditInfo from "./components/mypage/EditInfo";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CarListMain />} />
            <Route path='/detailmain/:id' element={<DetailMain />} />
            <Route path='/detailuser/:id' element={<DetailUser />} />
            <Route path="join" element={<Join />} />
            <Route path="login" element={<Login />} />
            <Route path="header" element={<Header />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="editinfo" element={<EditInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CarListMain from "./components/mainhj/CarListMain";
import GlobalStyle from "./styles/GlobalStyle";
import DetailMain from "./components/detail/DetailMain";
import DetailUser from "./components/detail/DetailUser";
import Add from "./components/add/Add";
import Login from "./components/login/login";
import Join from "./components/join/join";
import MyPage from "./components/mypage/mypage";
import Header from "./components/header/Header";
import EditInfo from "./components/mypage/EditInfo";
import NotPage from "./pages/NotPage";
import FindId from "./components/login/findId";
import FindPw from "./components/login/findPw";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CarListMain />} />
            <Route path='/detailmain/:id' element={<DetailMain />} />
            <Route path='/detailuser/:id' element={<DetailUser />} />
            <Route path="/join" element={<Join />} />
            <Route path="/add" element={<Add />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/EditInfo" element={<EditInfo />} />
            <Route path="/findId" element={<FindId />} />
            <Route path="/findPw" element={<FindPw />} />
            <Route path="*" element={<NotPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

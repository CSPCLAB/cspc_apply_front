import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAsync } from "react-async";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

// layouts
import MainLayout from "./components/Layouts/MainLayout";
import ApplyBanner from "./components/Layouts/Banner";
import ScrollToTop from "./components/ScrollToTop";

// pages
import Main from "./pages/MainPage/Main";
import Apply from "./pages/ApplyPage/Apply";
import Introduce from "./pages/IntroducePage/Introduce";
import { Login } from "./pages/LoginPage/Login";
import ApplyGuide from "./pages/ApplyPage/components/Guide/ApplyGuide";
import NotAllowApply from "pages/NotAllowPage/NotAllowApply";
import { MiddleResult } from "pages/ResultPage/MiddleResult";
import { FinalResult } from "pages/ResultPage/FinalResult";
import NotFound from "pages/NotFound";

//mobile pages
import Introduce2 from "./mobile/IntroducePage/Introduce";


// apis
import { get_recruit_info } from "apis/get_recruit";

// hooks
import usePageTracking from "./hooks/ga_tracking";

import { isBrowser, isMobile } from "react-device-detect";

const App = () => {
  return (
    <ScrollToTop>
      <RenderContent />
    </ScrollToTop>
  );
};

const RenderContent = () => {
  if (isBrowser) {
    return (
      <div className="browserApp">
        <Routes>
          <Route element={<MainLayout />} errorElement={<NotFound></NotFound>}>
            <Route path="*" element={<Navigate to="/error" />} />
            <Route path="/" element={<Main />} />
            <Route path="/error" element={<NotFound />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/notallow" element={<NotAllowApply />} />
            <Route path="/apply" element={<ApplyCheck />} />
            {/* <Route path="/login" element={<LoginCheck />} /> */}
            <Route path="/login" element={<Login />} />

            {/* <Route element={<ApplyBanner />}> */}
            <Route path="/middle" element={<MiddleResult />} />
            <Route path="/final" element={<FinalResult />} />
            {/* </Route> */}
            <Route path="/applyGuide" element={<ApplyGuide />} />
          </Route>
        </Routes>
      </div>
    );
  } else if (isMobile) {
    return (
      <Routes>
        <Route element={<MainLayout />} errorElement={<NotFound></NotFound>}>
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/" element={<Main />} />
          <Route path="/error" element={<NotFound />} />
          <Route path="/introduce" element={<Introduce2 />} />
          <Route path="/notallow" element={<NotAllowApply />} />
          <Route path="/apply" element={<ApplyCheck />} />
          {/* <Route path="/login" element={<LoginCheck />} /> */}
          <Route path="/login" element={<Login />} />

          {/* <Route element={<ApplyBanner />}> */}
          <Route path="/middle" element={<MiddleResult />} />
          <Route path="/final" element={<FinalResult />} />
          {/* </Route> */}
          <Route path="/applyGuide" element={<ApplyGuide />} />
        </Route>
      </Routes>
    );
  }
};

// ApplyPage 이동 권한 확인 후 이동
const ApplyCheck = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: get_recruit_info });

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) {
    if (data.process == "apply") return <Apply />;
    else return <Navigate to="/error" />;
  }
};

const LoginCheck = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: get_recruit_info });

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) {
    if (data.process == "close") return <NotAllowApply />;
    else return <Login />;
  }
};

export default App;

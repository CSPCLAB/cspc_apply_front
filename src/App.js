import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAsync } from "react-async";
import "bootstrap/dist/css/bootstrap.min.css";

// layouts
import MainLayout from "./layouts/MainLayout";
import ApplyBanner from "./layouts/applyBanner/ApplyBanner";
import ScrollToTop from "layouts/ScrollToTop";

// pages
import Main from "./pages/main_page/Main";
import Apply from "./pages/apply_page/Apply";
import Introduce from "./pages/doing_page/Introduce";
import { Login } from "./pages/login_page/Main";
import ApplyGuide from "./pages/apply_page/applyGuide/ApplyGuide";
import Not_allow_apply from "pages/Not_allow_page/Not_allow_apply";
import { MiddleResult } from "pages/result_page/MiddleResult";
import { FinalResult } from "pages/result_page/FinalResult";
import NotFound from "pages/NotFound";

// apis
import { get_recruit_info } from "apis/get_recruit";

// hooks
import usePageTracking from "./hooks/ga_tracking";

import ReactGA from "react-ga";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(gaTrackingId);

const App = () => {
  usePageTracking();
  return (
    <ScrollToTop>
      <Routes>
        <Route element={<MainLayout />} errorElement={<NotFound></NotFound>}>
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/" element={<Main />} />
          <Route path="/error" element={<NotFound />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/notallow" element={<Not_allow_apply />} />
          <Route path="/apply" element={<ApplyCheck />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ApplyBanner />}>
            <Route path="/middle" element={<MiddleResult />} />
            <Route path="/final" element={<FinalResult />} />
          </Route>
          <Route path="/applyGuide" element={<ApplyGuide />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
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

export default App;

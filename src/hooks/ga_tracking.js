import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const usePageTracking = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.set({ page: location.pathname }); // 페이지 설정
    ReactGA.pageview(location.pathname); // 페이지뷰 전송
  }, [location]);
};

export default usePageTracking;

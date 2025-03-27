import { LoginForm } from "./components/LoginForm";
import RecruitProcess from "./components/RecruitProcess";
import MobileRecruitProcess from "./components/MobileRecruitProcess";

import { useAsync } from "react-async";
import { get_recruit_info } from "../../apis/get_recruit";
import Not_allow_apply from "pages/NotAllowPage/NotAllowApply";

import { isBrowser, isMobile } from "react-device-detect";
import { useEffect } from "react";

export const Login = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: get_recruit_info });
  useEffect(() => {
    // 브라우저가 해당 링크로 리다이렉트 되도록 설정
    window.location.href = "https://saint.sogang.ac.kr/irj/portal";
  }, []);

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) {
    if (data.process == "close") return <Not_allow_apply />;
    else
      return (
        <>
          {isBrowser ? (
            <RecruitProcess recruit_data={data} />
          ) : (
            <MobileRecruitProcess recruit_data={data} />
          )}
          <LoginForm state={data.process}></LoginForm>
        </>
      );
  }
};

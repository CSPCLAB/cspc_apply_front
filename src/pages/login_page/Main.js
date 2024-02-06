import { LoginForm } from "./components/LoginForm";
import RecruitProcess from "./components/RecruitProcess";
import { useAsync } from "react-async";
import { get_recruit_info } from "./../../apis/get_recruit";
import Not_allow_apply from "pages/Not_allow_page/Not_allow_apply";
export const Login = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: get_recruit_info });

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) {
    if (data.process == "close") return <Not_allow_apply />;
    else
      return (
        <>
          <RecruitProcess recruit_data={data}></RecruitProcess>
          <LoginForm state={data.process}></LoginForm>
        </>
      );
  }
};

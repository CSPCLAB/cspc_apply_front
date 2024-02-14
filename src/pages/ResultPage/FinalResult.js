import { useLocation } from "react-router-dom";
import NotFound from "pages/NotFound";
import In_result_pass from "./components/InterviewPass";
import In_result_fail from "./components/InterviewFail";
export const FinalResult = () => {
  const location = useLocation();
  if (location.state === null) return <NotFound></NotFound>;
  if (location.state.state != "final") return <NotFound />;
  else {
    const resume = location.state.resume;
    if (resume.is_pass_final) {
      return <In_result_pass resume={resume} />;
    } else return <In_result_fail resume={resume} />;
  }
};

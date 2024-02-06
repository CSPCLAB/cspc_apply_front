import Doc_result_fail from "./Doc_result_fail_page/Doc_result_fail";
import Doc_result_pass from "./Doc_result_pass_page/Doc_result_pass";
import { useLocation } from "react-router-dom";
import NotFound from "pages/NotFound";

export const MiddleResult = () => {
  const location = useLocation();
  if (location.state === null) return <NotFound></NotFound>;
  if (location.state.state !== "middle") return <NotFound />;
  else {
    const resume = location.state.resume;
    if (resume === null) return <NotFound></NotFound>;
    if (resume.is_pass_document) {
      return <Doc_result_pass resume={resume} />;
    } else return <Doc_result_fail resume={resume} />;
  }
};

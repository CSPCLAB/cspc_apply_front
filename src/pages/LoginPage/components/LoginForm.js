import { Col, Container, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { login } from "apis/login";
import { useNavigate } from "react-router-dom";
import { get_resume } from "apis/resume";
import { get_result } from "apis/result";

import { styles } from "./styles/LoginForm.css";

export const LoginForm = ({ state }) => {
  const id = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      Login(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const Login = async (event) => {
    const id_temp = id.current.value;
    const pw_temp = password.current.value;
    const id_regex = /\d{8}/;
    if (!id_regex.test(id_temp)) {
      alert("학번을 정확히 입력해주세요!");
      return;
    }
    if (pw_temp.length < 8) {
      alert("비밀번호를 8자리 이상 입력해주세요!");
      return;
    }

    const [status_code, data] = await login(id_temp, pw_temp);

    switch (status_code) {
      case 200: // 신규 지원자
        sessionStorage.setItem("id", id_temp);
        sessionStorage.setItem("pw", pw_temp);
        if (state == "apply") {
          navigate("/apply");
        }

        break;
      case 201: // 기존 지원자
        sessionStorage.setItem("id", id_temp);
        sessionStorage.setItem("pw", pw_temp);
        if (state == "apply") {
          const resume = await get_resume();

          navigate("/apply", { state: resume });
        } else if (state == "middle") {
          const result = await get_result();
          navigate("/middle", { state: { resume: result, state: state } });
        } else if (state == "final") {
          const result = await get_result();
          navigate("/final", { state: { resume: result, state: state } });
        }
        break;
      case 404:
        alert("로그인 항목을 채워주세요!");
        break;
      case 500:
        alert("로그인 실패\n\n비밀번호를 분실한 경우 학회장에게 문의해주세요!");
        break;
      case 405:
        alert("지원기간 외 아이디 생성은 불가능합니다");
        break;
    }
  };
  return (
    <>
      <Container>
        <Col>
          {info_text(state)}
          <Form onKeyDown={handleOnKeyPress}>
            <Form.Control
              ref={id}
              type="text"
              className="login_input_box"
              placeholder="학번 (20231600)"
              required
            />
            <Form.Control
              ref={password}
              type="password"
              aria-describedby="passwordHelpBlock"
              className="login_input_box"
              placeholder="비밀번호"
              required
            />
            <Button variant="dark" className="apply_button" onClick={Login}>
              {" "}
              {state === "apply"
                ? "지원서 작성하기"
                : state === "middle"
                ? "서류 결과 확인하기"
                : "최종 결과 확인하기"}
            </Button>
          </Form>
        </Col>
      </Container>
    </>
  );
};

function info_text(state) {
  switch (state) {
    case "apply":
      return (
        <>
          {" "}
          <div className="login_top_text">지원하기</div>
          <div className="login_info_text">
            <div>지원서를 작성하거나, 저장 후 수정할 수 있습니다.</div>
            <div>최초 로그인 시 작성하신 비밀번호로 설정됩니다.</div>
          </div>
        </>
      );
    case "middle":
      return (
        <>
          {" "}
          <div className="login_top_text">서류 결과 확인하기</div>
          <div className="login_info_text">
            <div>지원서 작성 시 입력하신 학번과 비밀번호로</div>
            <div>결과를 확인할 수 있습니다.</div>
          </div>
        </>
      );
    case "final":
      return (
        <>
          {" "}
          <div className="login_top_text">최종 결과 확인하기</div>
          <div className="login_info_text">
            <div>지원서 작성 시 입력하신 학번과 비밀번호로</div>
            <div>결과를 확인할 수 있습니다.</div>
          </div>
        </>
      );
    default:
      return;
  }
}

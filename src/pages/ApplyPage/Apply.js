// Apply.js 에서 모든 Apply page관리
import React from "react";
import { useState, Link } from "react";
import { useAsync } from "react-async";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { post_resume, update_resume } from "../../apis/resume";
import NotFound from "pages/NotFound";
//// pages
//Login
import { Login } from "../LoginPage/Login";
// First Login
import ApplyFirst from "./components/First/ApplyFirst";
// Second Login
import ApplySecond from "./components/Second/ApplySecond";
// Apply From
import ApplyForm from "./components/Form/ApplyForm";
// Complete Apply
import ApplyComplete from "./components/Complete/ApplyComplete";

// css
import "./components/styles/Apply.css";

// Banner
// import Banner from "../../components/Layouts/Banner";

// Login.js에서 firstLogin 여부 확인해서 처리하기

// context
import { Provider } from "./components/Form/context/index";
import { get_auth_header } from "hooks/check_login";

const Apply = () => {
  // 처음인지 여부 알아와서 넣기

  const navigate = useNavigate();

  window.addEventListener("beforeunload", (event) => {
    // 표준에 따라 기본 동작 방지
    event.preventDefault();
    navigate("/apply", { state: contents });
    // Chrome에서는 returnValue 설정이 필요함
  });

  const location = useLocation();
  const data = location.state;

  const [isFirst, setIsFirst] = useState(data == null);

  // parameter page넣기
  const [pages, setPage] = useState(isFirst == true ? 1 : 2);
  // 0 -> LoginPage
  // 1 -> firstLogin
  // 2 -> SecondLogin
  // 3 -> ApplyForm
  // 4 -> ApplyComplete

  // 초기값

  const [contents, setContent] = useState(
    isFirst
      ? {
          interview_time_choice: [],
          name: "",
          semester: 0,
          phone: "",
          introduce: "",
          motivate: "",
          to_do: "",
          etc: "",
          interview_requirement: "",
        }
      : data
  );

  const postContent = async () => {
    const response_data = await post_resume(contents);
  };

  const patchContent = async () => {
    const tempContent = contents;
    delete tempContent.updated_at;

    setContent(tempContent);

    const response_data = await update_resume(contents);
  };

  const checkForm = () => {
    if (
      contents.name == "" ||
      contents.semester == 0 ||
      contents.phone == "" ||
      contents.semester == "" ||
      contents.introduce == "" ||
      contents.motivate == "" ||
      contents.to_do == "" ||
      contents.etc == ""
    ) {
      alert("필수 항목을 입력해주세요.");
      return false;
    }
    if (contents.interview_time_choice.length == 0) {
      alert(
        "면접시간을 최소 하나 선택해주세요.\n가능하신 시간이 없으면 학회장에게 문의해주세요."
      );
      return false;
    }
    // 글자 수 제한
    // if (
    //   contents.introduce.length < 200 ||
    //   contents.motivate.length < 100 ||
    //   contents.to_do.length < 50
    // ) {
    //   alert("글자 수가 부족합니다.");
    //   return false;
    // }
    return true;
  };

  const uploadContent = () => {
    if (checkForm()) {
      if (isFirst) {
        postContent();
      } else {
        patchContent();
      }

      // 제대로 제출되었을 때만 페이지 이동
      // form check
      // ->

      window.scrollTo(0, 0);
      setPage(4);
    }
  };
  // 로그인안하고 접근 시 오류처리
  if (get_auth_header() == null) return <NotFound></NotFound>;
  switch (pages) {
    case 0:
      return <Login />;
    case 1:
      return (
        <>
          {/* <Banner title="지원하기" /> */}
          <div className="ApplyStyle">
            <ApplyFirst setPage={setPage} />
          </div>
        </>
      );
    case 2:
      return (
        <>
          {/* <Banner title="지원하기" /> */}
          <div className="ApplyStyle">
            <ApplySecond setPage={setPage} updateTime={data.updated_at} />
          </div>
        </>
      );
    case 3:
      return (
        <Provider>
          {/* <Banner title="지원하기" /> */}
          <div className="ApplyStyle">
            <ApplyForm
              isFirst={isFirst}
              contents={contents}
              setContent={setContent}
              uploadContent={uploadContent}
            />
          </div>
        </Provider>
      );
    case 4:
      return (
        <>
          {/* <Banner title="지원하기" /> */}
          <div className="ApplyStyle">
            <ApplyComplete />
          </div>
        </>
      );
  }
};

export default Apply;

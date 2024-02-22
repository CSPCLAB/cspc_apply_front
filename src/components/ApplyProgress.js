import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { useAsync } from "react-async";
import dateFormat, { masks } from "dateformat";
import { Link } from "react-router-dom";

import { get_recruit_info } from "../apis/get_recruit";
import right_vector from "../assets/images/right_vector.png";

import "./styles/ApplyProgress.css";

const ApplyProgress = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: get_recruit_info });

  const format = "m/d";

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    return (
      <div className="base">
        <div className="mform">
          <div className="process">지원 절차</div>
          <div className="guideLine" />
          <div className="circleFrame">
            <div className="firstCircle">
              <div className="circleTitle1">서류</div>
              <div className="circleContent1">
                {dateFormat(data.start_time, format)} ~{" "}
                {dateFormat(data.document_deadline, format)} 24시
              </div>
            </div>

            <img src={right_vector} className="right1"></img>

            <div className="secondCircle">
              <div className="circleTitle2">면접</div>
              <div className="circleContent2">
                {dateFormat(data.interview_start_time, format)} ~{" "}
                {dateFormat(data.interview_end_time, format)}
              </div>
            </div>

            <img src={right_vector} className="right2"></img>

            <div className="thirdCircle">
              <div className="circleTitle2">합류</div>
              <div className="circleContent3">
                {dateFormat(data.announce_final_time, "m")}월 중 예정
              </div>
            </div>
          </div>
          <Link to="/login">
            <button className="ApplyButton">
              <div className="applyLetter"> 지원하기</div>
            </button>
          </Link>
        </div>
      </div>
    );
};


const Mobile_ApplyProgress = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: get_recruit_info });

  const format = "m/d";

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    return (
      <div className="base">
        <div className="mform">
          <div className="process">지원 절차</div>
          <div className="guideLine" />
          <div className="circleFrame">
            <div className="firstCircle">
              <div className="circleTitle1">서류</div>
              <div className="circleContent1">
                {dateFormat(data.start_time, format)} ~{" "}
                {dateFormat(data.document_deadline, format)} 24시
              </div>
            </div>

            <img src={right_vector} className="right1"></img>

            <div className="secondCircle">
              <div className="circleTitle2">면접</div>
              <div className="circleContent2">
                {dateFormat(data.interview_start_time, format)} ~{" "}
                {dateFormat(data.interview_end_time, format)}
              </div>
            </div>

            <img src={right_vector} className="right2"></img>

            <div className="thirdCircle">
              <div className="circleTitle2">합류</div>
              <div className="circleContent3">
                {dateFormat(data.announce_final_time, "m")}월 중 예정
              </div>
            </div>
          </div>
          <Link to="/login">
            <button className="ApplyButton">
              <div className="applyLetter"> 지원하기</div>
            </button>
          </Link>
        </div>
      </div>
    );
};


export {ApplyProgress, Mobile_ApplyProgress};

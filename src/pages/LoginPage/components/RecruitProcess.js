import { Container, Row, Col } from "react-bootstrap";

import { useAsync } from "react-async";
import dateFormat, { masks } from "dateformat";

import styles from "./styles/RecruitProcess.module.css";

import right_vector from "./../../../assets/images/right_vector.png";
const RecruitProcess = ({ recruit_data }) => {
  const format = "m/d";
  return (
    <>
      <div className={styles.background}>
        <Container>
          <div className={styles.banner_text}> 지원절차</div>

          <Container className={styles.banner_content}>
            <div
              className={
                recruit_data.process === "apply"
                  ? styles.document_circle_process
                  : styles.document_circle
              }
            >
              <Col className={styles.circle_content}>
                <Row className={styles.process_text}>서류</Row>
                <Row className={styles.date_text}>
                  {dateFormat(recruit_data.start_time, format)} ~{" "}
                  {dateFormat(recruit_data.document_deadline, format)} 24시
                </Row>
              </Col>
            </div>
            <img src={right_vector} className={styles.right}></img>
            <div
              className={
                recruit_data.process === "middle"
                  ? styles.interview_circle_process
                  : styles.interview_circle
              }
            >
              <Col className={styles.circle_content}>
                <Row className={styles.process_text}>면접</Row>
                <Row className={styles.date_text}>
                  {dateFormat(recruit_data.interview_start_time, format)} ~{" "}
                  {dateFormat(recruit_data.interview_end_time, format)}
                </Row>
              </Col>
            </div>
            <img src={right_vector} className={styles.right}></img>
            <div
              className={
                recruit_data.process === "final"
                  ? styles.join_circle_process
                  : styles.join_circle
              }
            >
              <Col className={styles.circle_content}>
                <Row className={styles.process_text}>합류</Row>
                <Row className={styles.date_text}>
                  {dateFormat(recruit_data.announce_final_time, "m")}월 중 예정{" "}
                </Row>
              </Col>
            </div>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default RecruitProcess;

import { Container, Row, Col } from "react-bootstrap";

import { useAsync } from "react-async";
import dateFormat, { masks } from "dateformat";

import styles from "./styles/RecruitProcess.module.css";

import right_vector from "./../../../assets/images/right_vector.png";

const MobileRecruitProcess = ({ recruit_data }) => {
  const format = "m/d";
  return (
    <>
      <div className={styles.mobileBackground}>
        <Container>
          <div className={styles.banner_text}> 지원절차</div>

          <div className={styles.banner_line} />

          <Container className={styles.banner_content}>
            <Col className={styles.circle_content}>
              <Row className={styles.process_text}>서류</Row>
              <Row className={styles.date_text}>
                {dateFormat(recruit_data.start_time, format)} ~{" "}
                {dateFormat(recruit_data.document_deadline, format)}
              </Row>
            </Col>
            <img src={"https://apply.cspc.me/media/applyguide_right_vector.png"} className={styles.right}></img>

            <Col className={styles.circle_content}>
              <Row className={styles.process_text}>면접</Row>
              <Row className={styles.date_text}>
                {dateFormat(recruit_data.interview_start_time, format)} ~{" "}
                {dateFormat(recruit_data.interview_end_time, format)}
              </Row>
            </Col>
            <img src={"https://apply.cspc.me/media/applyguide_right_vector.png"} className={styles.right}></img>

            <Col className={styles.circle_content}>
              <Row className={styles.process_text}>합류</Row>
              <Row className={styles.date_text}>
                {dateFormat(recruit_data.announce_final_time, "m")}월 중 예정{" "}
              </Row>
            </Col>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default MobileRecruitProcess;

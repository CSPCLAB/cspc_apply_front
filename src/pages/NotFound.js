import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <h1>오류 발생!</h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="button_">CSPC 홈으로 돌아가기</div>
        </Link>
      </Container>
    </div>
  );
}

import { Col, Container, Row } from "react-bootstrap";
import AllPost from "../Comppoent/AllPost/AllPost";
import AllPostSecton from "../Comppoent/AllPostSection/AllPostSecton";
import Branner from "../Comppoent/Brannner/Branner";
import AllInfo from "../Comppoent/Info/AllInfo";

const Home = () => {
  return (
    <>
      <Branner />

      <Container>
        <AllPostSecton />
        <Row>
          <Col lg="8" className=" mt-5">
            <AllPost />
          </Col>

          <Col lg="4" className="d-none d-lg-block mt-5">
            <AllInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

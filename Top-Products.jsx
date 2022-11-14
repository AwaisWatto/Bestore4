import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './Wraper1.webp'


function Tproducts() {
    return (
      <Container className="p-3"  >
          
        <Row>
        <Col>
        <div className=" p-5 display-4 text-center fw-bold">Our Top Products</div>
        </Col>
        </Row>


        <Row>
        <Col className=" mb-4 mb-md-0">
      <img src={logo} alt="BigCo Inc. logo" width={500} height={460} />
        </Col>

        <Col>
        <img src={require('./Wraper2.webp')} alt="BigCo Inc. logo" width={500} height={460} />
        </Col>

        </Row>

    </Container>
  );
}

export default Tproducts;
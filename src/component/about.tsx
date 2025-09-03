import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function About() {
  useEffect(() => {
    throw new Error("Simulated error for testing purposes");
  }, []);
  return (
    <section className="py-5 bg-white" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt="About us"
              fluid
              rounded
            />
          </Col>

          <Col md={6}>
            <h2 className="fw-bold mb-3">About Us</h2>
            <p className="text-muted mb-4">
              We are a passionate team dedicated to building modern, responsive,
              and scalable applications. With a focus on user experience and
              performance, we help businesses bring their digital ideas to life.
            </p>
            <p className="text-muted mb-4">
              From mobile apps to web platforms, our goal is to deliver
              solutions that not only meet your needs but also exceed
              expectations.
            </p>
            <Button variant="primary" href="#contact">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

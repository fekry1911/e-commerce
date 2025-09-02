import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section className="py-5 bg-light" id="contact">
      <Container>
        <Row className="mb-4 text-center">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">
            Have questions? We'd love to hear from you. Send us a message and
            we’ll respond as soon as possible.
          </p>
        </Row>

        <Row className="gy-4">
          {/* Contact Info */}
          <Col
            md={4}
            className="d-flex flex-column align-items-center text-center"
          >
            <i className="bi bi-geo-alt-fill fs-1 text-primary mb-2"></i>
            <h5>Our Office</h5>
            <p>123 Cairo Street, Egypt</p>
          </Col>

          <Col
            md={4}
            className="d-flex flex-column align-items-center text-center"
          >
            <i className="bi bi-telephone-fill fs-1 text-success mb-2"></i>
            <h5>Call Us</h5>
            <p>+20 111 222 3333</p>
          </Col>

          <Col
            md={4}
            className="d-flex flex-column align-items-center text-center"
          >
            <i className="bi bi-envelope-fill fs-1 text-danger mb-2"></i>
            <h5>Email Us</h5>
            <p>support@mywebsite.com</p>
          </Col>
        </Row>

        <hr className="my-5" />

        {/* Contact Form */}
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control type="text" placeholder="Your Name" required />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your Message"
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5>MyWebsite</h5>
            <p className="text-light">
              Building modern web and mobile applications with love ❤️
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h6>Follow Us</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#" className="text-light">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />
        <p className="text-center m-0">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

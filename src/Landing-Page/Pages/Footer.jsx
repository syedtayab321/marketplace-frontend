import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './../assets/css/footer.css';

const Footer = () => {
  return (
      <footer className="footer-container">
          <Container>
              <Row className="py-5">
                  {/* Footer Sections */}
                  <Col xs={12} md={4} className="footer-section">
                      <h5 className="footer-title">About Us</h5>
                      <p className="footer-description">
                          We are committed to providing top-quality auto repair services with a focus on customer
                          satisfaction.
                      </p>
                  </Col>

                  <Col xs={12} md={4} className="footer-section">
                      <h5 className="footer-title">Quick Links</h5>
                      <ListGroup variant="flush">
                          <ListGroup.Item className="footer-link-item">
                              <a href="/services">Services</a>
                          </ListGroup.Item>
                          <ListGroup.Item className="footer-link-item">
                              <a href="/about">About Us</a>
                          </ListGroup.Item>
                          <ListGroup.Item className="footer-link-item">
                              <a href="/contact">Contact</a>
                          </ListGroup.Item>
                          <ListGroup.Item className="footer-link-item">
                              <a href="/faq">FAQ</a>
                          </ListGroup.Item>
                      </ListGroup>
                  </Col>

                  <Col xs={12} md={4} className="footer-section">
                      <h5 className="footer-title">Contact Us</h5>
                      <p className="footer-description">
                          <strong>Email:</strong> support@company.com
                      </p>
                      <p className="footer-description">
                          <strong>Phone:</strong> (123) 456-7890
                      </p>

                      <div className="social-icons">
                          <Button variant="link" className="social-icon">
                              <FaFacebook size={25}/>
                          </Button>
                          <Button variant="link" className="social-icon">
                              <FaTwitter size={25}/>
                          </Button>
                          <Button variant="link" className="social-icon">
                              <FaLinkedin size={25}/>
                          </Button>
                          <Button variant="link" className="social-icon">
                              <FaInstagram size={25}/>
                          </Button>
                      </div>
                  </Col>
              </Row>

              <Row className="py-3 border-top">
                  <Col className="text-center">
                      <p className="footer-bottom-text">
                          &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
                      </p>
                  </Col>
              </Row>
          </Container>
      </footer>
  );
};

export default Footer;

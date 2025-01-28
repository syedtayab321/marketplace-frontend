import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import aboutImage from '../assets/images/auto-part1.jpg';
import './../assets/css/about.css';

const AboutPage = () => {
  return (
      <div className="about-page">
        <header className="about-header text-center py-5 bg-dark text-white">
          <h1>About Us</h1>
          <p>Learn more about our journey and what makes us unique.</p>
        </header>

        <Container className="py-5">
          <Row className="align-items-center mb-5">
            <Col md={6} className="text-center">
              <Image src={aboutImage} fluid rounded className="shadow-lg"/>
            </Col>
            <Col md={6} className="text-md-start text-center">
              <h2 className="mb-4">Who We Are</h2>
              <p className="text-muted">
                Welcome to AutoPartsPro, your number one source for quality auto parts. Founded in 2020, we are
                dedicated to providing
                you with the best selection of parts, focusing on dependability, customer service, and affordability.
              </p>
              <Button variant="primary" href="/shop" size="lg">
                Explore Our Products
              </Button>
            </Col>
          </Row>

          <Row className="text-center py-5 bg-light">
            <h2 className="mb-4">What Makes Us Different</h2>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title>High-Quality Parts</Card.Title>
                  <Card.Text>We source only the best components to ensure your vehicle performs at its best.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title>Expert Support</Card.Title>
                  <Card.Text>Our team is here to help you find the perfect fit for your vehicle.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title>Affordable Prices</Card.Title>
                  <Card.Text>Get premium auto parts at prices that won't break the bank.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default AboutPage;

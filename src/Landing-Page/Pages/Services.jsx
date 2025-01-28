import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/css/services.css";

const services = [
  {
    id: 1,
    title: "Engine Repairs",
    description: "Expert engine diagnostics and repair services to keep your vehicle running smoothly.",
    icon: "🛠️",
  },
  {
    id: 2,
    title: "Tire Replacement",
    description: "High-quality tire replacement services for safety and optimal performance.",
    icon: "🚗",
  },
  {
    id: 3,
    title: "Battery Services",
    description: "Reliable battery testing, replacement, and charging services.",
    icon: "🔋",
  },
  {
    id: 4,
    title: "Oil Changes",
    description: "Quick and efficient oil change services for improved engine performance.",
    icon: "🛢️",
  },
  {
    id: 5,
    title: "Brake Services",
    description: "Comprehensive brake inspection and repair services for your safety.",
    icon: "🚦",
  },
  {
    id: 6,
    title: "Car Detailing",
    description: "Professional car detailing services to make your vehicle look brand new.",
    icon: "✨",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-container">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="services-title">Our Services</h1>
          <p className="services-description">
            Explore our wide range of auto repair and maintenance services designed to keep your car in perfect condition.
          </p>
        </div>

        <Row xs={1} sm={2} lg={3} className="g-4">
          {services.map((service) => (
            <Col key={service.id}>
              <Card className="service-card">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="service-icon">{service.icon}</div>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">{service.description}</Card.Text>
                  <Button variant="primary" className="service-btn">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesPage;

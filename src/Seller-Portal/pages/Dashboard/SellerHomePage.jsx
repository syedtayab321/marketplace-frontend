import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBox, FaMoneyBillWave, FaChartLine, FaBell } from "react-icons/fa";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

const SellerHomePage = () => {
  const stats = [
    { icon: FaBox, label: "Total Listings", value: "45" },
    { icon: FaMoneyBillWave, label: "Total Sales", value: "$12,340" },
    { icon: FaChartLine, label: "Pending Orders", value: "8" },
    { icon: FaBell, label: "Notifications", value: "3" }
  ];

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales Revenue",
        data: [5000, 7000, 8000, 12000, 15000, 18000],
        backgroundColor: "#007bff"
      }
    ]
  };

  const doughnutData = {
    labels: ["Completed", "Pending", "Cancelled"],
    datasets: [
      {
        label: "Orders Status",
        data: [65, 20, 15],
        backgroundColor: ["#28a745", "#ffc107", "#dc3545"]
      }
    ]
  };

  return (
    <Container fluid className="bg-light min-vh-100 py-5">
      <h2 className="text-center text-primary fw-bold mb-4">Seller Dashboard</h2>

      <Row className="g-4">
        {stats.map((item, index) => (
          <Col key={index} md={6} lg={3}>
            <Card className="shadow-lg border-0 rounded-3 text-center p-4 transition" style={{ cursor: "pointer" }}>
              <Card.Body>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <item.icon size={30} className="text-primary me-2" />
                  <h5 className="fw-bold mb-0">{item.label}</h5>
                </div>
                <h3 className="text-success fw-bold">{item.value}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5 g-4">
        <Col md={6}>
          <Card className="shadow-lg border-0 rounded-3 p-4">
            <Card.Body>
              <h5 className="fw-bold text-center">Sales Overview</h5>
              <Bar data={barData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-lg border-0 rounded-3 p-4">
            <Card.Body>
              <h5 className="fw-bold text-center">Orders Status</h5>
              <Doughnut data={doughnutData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mt-5">
        <h4 className="text-secondary fw-bold mb-3">Recent Activity</h4>
        <Card className="shadow-lg border-0 rounded-3 p-4">
          <Card.Body>
            <h5 className="fw-bold text-dark">New order received</h5>
            <p className="mb-1 text-muted">Product: <strong>BMW 3 Series Headlight</strong></p>
            <p className="mb-1 text-muted">Buyer: John Doe</p>
            <p className="text-muted">Date: 2023-10-15</p>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default SellerHomePage;
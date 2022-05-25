import React from "react";
import { Container, Card, Row, Col, CardGroup } from "react-bootstrap";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <>
        <Container>
          <Row>
            {reviews.map((review) => (
              <Col key={review.firstName}>
                <CardGroup className="cardGroup">
                  <Card className="card">
                    <p className="card-body">{review.firstName}</p>
                    <p className="card-body">{review.review}</p>
                  </Card>
                </CardGroup>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    </div>
  );
};

export default ReviewList;

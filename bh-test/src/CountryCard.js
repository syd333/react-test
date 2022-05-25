import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import "./App.css";
/* eslint-disable react/prop-types */

const CountryCard = ({ country }) => {
  return (
    <Container>
      <CardGroup className="cardGroup">
        <Card className="card">
          <p className="card-title">{country.name.common}</p>
          <Card.Body className="card-body">
            things to do while you are visiting {country.name.common}
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default CountryCard;

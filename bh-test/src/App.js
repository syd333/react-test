import React, { useEffect, useState } from "react";
import "./App.css";
import CountryCard from "./CountryCard";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [reviews, updateReviews] = useState([]);

  const addReviews = (reviewInfo) => {
    updateReviews([...reviews, reviewInfo]);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCountries(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(reviews);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="App">
        <Container>
          <p className="header">FUN JET DESTINATIONS</p>
          <Row>
            {countries.slice(0, 6).map((country) => (
              <Col key={country.capital}>
                <CountryCard country={country} />
              </Col>
            ))}
          </Row>
          <ReviewForm addReviews={addReviews} />
          <ReviewList reviews={reviews} />
        </Container>
      </div>
    );
  }
}

export default App;

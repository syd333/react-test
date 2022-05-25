import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const ReviewForm = ({ addReviews }) => {
  const [reviewInfo, setReviewInfo] = useState({
    firstName: "",
    review: "",
  });

  const handleChange = (e) => {
    console.log("here");
    console.log(e.target.value);
    const value = e.target.value;
    setReviewInfo({
      ...reviewInfo,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addReviews(reviewInfo);
    setReviewInfo({ firstName: "", review: "" });
  };
  console.log(reviewInfo);
  return (
    <div>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="input mb-2">
                <div className="form-text">
                  Share your vacation memories with us!{" "}
                </div>
                <input
                  id="input"
                  type="text"
                  placeholder="Name"
                  name="firstName"
                  value={reviewInfo.firstName}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="text mb-2">
                <textarea
                  id="textarea"
                  type="text"
                  name="review"
                  value={reviewInfo.review}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="button">
                <button type="submit" id="button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default ReviewForm;

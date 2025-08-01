import React from "react";
import "./Reviews.css";
const Reviews = () => {
  return (
    <section className="reviews">
      <h2 className="reviews-title">Our Reviews</h2>
      <div className="reviews-list">
        <blockquote className="review">
          <p>
            "Before TaskFlow I was always forgetting things but now I feel so much more organized "
          </p>
          <footer>Hamed</footer>
        </blockquote>

        <blockquote className="review">
          <p>
            "I love how easy it is to add tasks and get reminders.this app is very helpful"
          </p>
          <footer>Amira</footer>
        </blockquote>

        <blockquote className="review">
          <p>
            "Finally a tool that doesn’t charge us, TaskFlow helps me finish what I start."
          </p>
          <footer>Adel</footer>
        </blockquote>
      </div>
    </section>
  );
};
export default Reviews;
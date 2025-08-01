import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">Features</h2>
      <div className="features-list">
        <div className="feature">
          <div className="feature-icon">🗂️</div>
          <h3 className="feature-name">Organize Tasks</h3>
          <p className="feature-desc">Keeps your tasks  organized.</p>
        </div>

        <div className="feature">
          <div className="feature-icon">⏰</div>
          <h3 className="feature-name">Set Reminders</h3>
          <p className="feature-desc">Never miss anything with reminders.</p>
        </div>

        <div className="feature">
          <div className="feature-icon">📊</div>
          <h3 className="feature-name">Track Progress</h3>
          <p className="feature-desc">See your progress and track them .</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

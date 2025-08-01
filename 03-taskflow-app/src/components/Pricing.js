import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <div className="pricing-cards">
        <div className="card">
          <h3>Free</h3>
          <p className="price">0 LE/month</p>
          <ul>
            <li>Basic task tracking</li>
            <li>10 projects</li>
            <li>Email support</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="card">
          <h3>Pro</h3>
          <p className="price">100 LE/month</p>
          <ul>
            <li>Unlimited tasks</li>
            <li>50 projects</li>
            <li>Priority support</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="card">
          <h3>Team</h3>
          <p className="price">250 LE//month</p>
          <ul>
            <li>Unlimited everything</li>
            <li>Team collaboration</li>
            <li>Admin tools</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

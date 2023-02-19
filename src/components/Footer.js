import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the <strong>Adventure Newsletter</strong> to receive our events
          details
        </p>

        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
          <p className="footer-subscription-text">
            You can unsubscribe at any time
          </p>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Beretta Trident</Link>
            <Link to="/">Orvis Endorsed</Link>
            <Link to="/">Our Staff</Link>
            <Link to="/">News</Link>
            <Link to="/">Membership</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">Donations</Link>
            <Link to="/sign-up">E-Gift Card</Link>
            <Link to="/sign-up">Payments</Link>
            <Link to="/sign-up">Pro Shop</Link>
            <Link to="/sign-up">Reservations</Link>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Our Services</h2>
              <Link to="/services">Wingshooting</Link>
              <Link to="/services">Gundogs</Link>
              <Link to="/services">Deer & Turkey</Link>
              <Link to="/services">Sporting Activities</Link>
              <Link to="/services">Water Reacreation</Link>
            </div>
            <div className="footer-link-items">
              <h2>Stay with Us</h2>
              <Link to="/products">Our Lodges</Link>
              <Link to="/products">Amenities</Link>
              <Link to="/products">The Cypress Lodge</Link>
              <Link to="/products">Gourmet Dinner</Link>
              <Link to="/products">Event Facilities</Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link
              to="/"
              className="social-logo"
            >
              Upland Resort
              <i className="fa-sharp fa-solid fa-paw" />
            </Link>
          </div>
          <small className="website-rights">Upland Resort © 2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

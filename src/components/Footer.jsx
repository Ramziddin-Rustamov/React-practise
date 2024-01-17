import React from 'react';

export default function Footer() {
  return (
    <div>
     <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Footer </h5>
            <p>Here is our foods </p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <address>
              Email: food@example.com<br />
              Phone: (123) 456-7890
            </address>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

import React from 'react';
import '../styles/Dashboard.css';

const SingleBatches = () => {
  return (
    <div className="single-container">
      <div className="header">Order Details</div>
      <div className="single-id-box">
        <p>Batch ID: XXXX</p>
      </div>
      <div className="single-info-box">
        <div className="info">
          <p>Supplier: XXXX</p>
          <p>Weight: XX kg</p>
          <p>Type: Tea Bag</p>
          <p>Status: On Process</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBatches;


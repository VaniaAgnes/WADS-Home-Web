import React from 'react';
import '../styles/Dashboard.css';

const Batches = () => {
  return (
    <div className="container">
      <div className="header">Batches</div>
      <div className="sand-box">
        <div className="batches-info">
          <p>Supplier: XXXX </p>
          <p>Weight: XX kg </p>
          <p>Type: Tea Bag </p>
          <p>Status: On Process</p>
          <p><a href="/batch/detail/:id">Batch ID: XXXX</a></p>
        </div>
      </div>
      <div className="sand-box">
        <div className="batches-info">
          <p>Supplier: XXXX</p>
          <p>Weight:  XX kg</p>
          <p>Type: Dry Leaves</p>
          <p>Status: Ready for Pickup</p>
          <p><a href="/batch/detail/:id">Batch ID: XXXX</a></p>
        </div>
      </div>
      <div className="sand-box">
        <div className="batches-info">
          <p>Supplier: XXXX</p>
          <p>Weight: XX kg</p>
          <p>Type: Wet Leaves</p>
          <p>Status: Waiting</p>
          <p><a href="/batch/detail/:id">Batch ID: XXXX</a></p>
        </div>
      </div>
      <div className="sand-box">
        <div className="batches-info">
          <p>Supplier: XXXX</p>
          <p>Weight: XX kg</p>
          <p>Type: Powder Leaves</p>
          <p>Status: Ready for Pickup</p>
          <p><a href="/batch/detail/:id">Batch ID: XXXX</a></p>
        </div>
      </div>
      <div className="sand-box">
        <div className="batches-info">
          <p>Supplier: XXXX</p>
          <p>Weight: XX kg</p>
          <p>Type: Dry Leaves</p>
          <p>Status: On Process</p>
          <p><a href="/batch/detail/:id">Batch ID: XXXX</a></p>
        </div>
      </div>
      <div className="sand-box">
        <div className="batches-info">
          <p>Supplier: XXXX</p>
          <p>Weight:XX kg</p>
          <p>Type: Tea Pouch</p>
          <p>Status: Being Delivered</p>
          <p><a href="/batch/detail/:id">Batch ID: XXXX</a></p>
        </div>
      </div>
    </div>
  );
};

export default Batches;

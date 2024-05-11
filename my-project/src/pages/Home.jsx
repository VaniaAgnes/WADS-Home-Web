import React from 'react';
import '../styles/Dashboard.css'; // Make sure the path is correct
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="container">
      <div className="header">PureLeaf</div>
      <div className="equal-size">
        <div className="batches-box">
          <h2>Batches</h2>
          <table className="table rounded">
            <thead>
              <tr>
                <th>Supplier ID</th>
                <th>Batch ID</th>
                <th>Weight</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>XX kg</td>
                <td>Powder</td>
                <td>Shipped</td>
              </tr>
              <tr>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>YY kg</td>
                <td>Tea Leaves</td>
                <td>In Process</td>
              </tr>
              <tr>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>AA kg</td>
                <td>Dry Leaves</td>
                <td>Delivery</td>
              </tr>
              <tr>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>BB kg</td>
                <td>Wet Leaves</td>
                <td>Shipped</td>
              </tr>
              <tr>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>CC kg</td>
                <td>Powdered Leaves</td>
                <td>Ready</td>
              </tr>
              <tr>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>ZZ kg</td>
                <td>Dry Leaves</td>
                <td>Ready</td>
              </tr>
              <tr>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>
                <Link to="/batch/:id">XXXX</Link>
                </td>
                <td>ZZ kg</td>
                <td>Tea Bags</td>
                <td>Ready</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="equal-size">
        <div className="box">
          <h2>Notifications</h2>
          <div className="notification-item">
            <div className="notification-info">
              <span>Batch ID:</span>
              <span><Link to="/batch/:id">XXXX</Link></span>
            </div>
            <div className="notification-info">
              <span>Shipment ID:</span>
              <span><Link to="/batch/:id">XXXX</Link></span>
            </div>
            <div className="notification-info">
              <span>Supplier ID:</span>
              <span><Link to="/batch/:id">XXXX</Link></span>
            </div>
            <div className="notification-message">Any relevant message goes here</div>
          </div>
          <div className="notification-item">
            <div className="notification-info">
              <span>Batch ID:</span>
              <span><Link to="/batch/:id">XXXX</Link></span>
            </div>
            <div className="notification-info">
              <span>Shipment ID:</span>
              <span><Link to="/batch/:id">XXXX</Link></span>
            </div>
            <div className="notification-info">
              <span>Supplier ID:</span>
              <span><Link to="/batch/:id">XXXX</Link></span>
            </div>
            <div className="notification-message">Any relevant message goes here</div>
          </div>
        </div>
      </div>
      <div className="equal-size" style={{ gridColumn: "1 / -1" }}>
        {/* Spanning full width */}
        <div className="box">
          <h2>Shipments</h2>
          <table className="table rounded">
            <thead>
              <tr>
                <th>Supplier ID</th>
                <th>Batch ID</th>
                <th>Shipment ID</th>
                <th>Weight</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td>XX kg</td>
                <td>
                  <div className="status-circles">
                    <div className="circle moss"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td>AA kg</td>
                <td>
                  <div className="status-circles">
                    <div className="circle moss"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td>BB kg</td>
                <td>
                  <div className="status-circles">
                    <div className="circle moss"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td><Link to="/batch/:id">XXXX</Link></td>
                <td>CC kg</td>
                <td>
                  <div className="status-circles">
                    <div className="circle moss"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                    <div className="connector"></div>
                    <div className="circle earth"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

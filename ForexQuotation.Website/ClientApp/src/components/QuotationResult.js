import React from 'react';
import { connect } from 'react-redux';

const QuotationResult = props => (
  <div>
    <h1>Quick Quote</h1>
    <div class="card">
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col-4 mx-auto">
            <h5>OFX Customer Rate</h5>
            <h1 class="text-success">0.7618</h1>
            <h5>From</h5>
            <h2>AUD <span class="text-info">25,000.00</span></h2>
            <h5>To</h5>
            <h2>USD <span class="text-info">19,045.00</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default connect()(QuotationResult);
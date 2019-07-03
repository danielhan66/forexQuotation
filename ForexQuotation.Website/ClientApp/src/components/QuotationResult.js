import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const QuotationResult = props => {
  return props.quotation ? (
  <div>
    <header className="header"><h1>Quick Quote</h1></header>
    <div class="card">
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col-10 col-md-4 mx-auto">
            <h5>OFX Customer Rate</h5>
            <h1 class="text-success">{props.quotation.ofxCustomerRate}</h1>
            <h5>From</h5>
            <h2>{props.quotation.fromCurrencyCode} <span class="text-info">{props.quotation.amount}</span></h2>
            <h5>To</h5>
            <h2>{props.quotation.toCurrencyCode} <span class="text-info">{props.quotation.ofxCustomerAmount}</span></h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 mx-auto">
            <Link className='btn btn-primary' to="/">START NEW QUOTE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>) : null
};

const mapStateToProps = state => ({
  quotation: state.quotations.quotation
})

export default connect(mapStateToProps)(QuotationResult);
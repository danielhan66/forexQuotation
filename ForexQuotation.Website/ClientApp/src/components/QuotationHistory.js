import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import moment from 'moment';

export const QuotationHistory = props =>{
    // componentDidMount
    React.useEffect(() => {
      props.fetchQuotations();
    }, []);

  return (
  <div>
    <header className="header"><h1>Quote history</h1></header>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>OFX Customer Rate</th>
          <th>From</th>
          <th>To</th>          
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {props.quotations && Array.isArray(props.quotations) ? props.quotations.map(quotation =>
          <tr key={quotation.id}>
            <td>{quotation.id}</td>
            <td>{quotation.firstName}</td>
            <td>{quotation.lastName}</td>
            <td>{quotation.email}</td>
            <td>{quotation.phone}</td>
            <td>{quotation.ofxCustomerRate}</td>
            <td>{quotation.fromCurrencyCode}</td>
            <td>{quotation.toCurrencyCode}</td>
            <td>{moment(quotation.createdDate).format('MMMM Do YYYY, h:mm:ss a')}</td>
          </tr>
        ):null}
      </tbody>
    </table>
  </div>
  )
}

const mapStateToProps = state => ({
  ...state.quotations
})

const mapDispatchToProps = dispatch => ({
  fetchQuotations: () => dispatch(actions.fetchQuotations())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuotationHistory)
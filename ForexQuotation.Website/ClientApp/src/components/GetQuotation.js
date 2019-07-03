import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as actions from '../actions';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';

const GetQuotation = props => {
  const [state, setState] = useState({jobDone: true, redirect: false});

  // componentDidMount
  React.useEffect(() => {
      props.fetchCurrencies();
  }, []);

  React.useEffect(() => {
    if(state.jobDone === false && props.jobDone === true){
      if(!state.redirect){
        setState((prevState) => {
          return {
            ...prevState,
            redirect: true
          }
        });
      }
    }

    if(state.jobDone !== props.jobDone){
      setState((prevState) => {
        return {
          ...prevState,
          jobDone: props.jobDone
        }
      });
    }
  });

  return (
    <div>
      {state.redirect && (<Redirect to='/quotation_result' />)}
    <header className="header"><h1>Quick Quote</h1></header>
    <div className="card">
    <div className="card-body">
    <Formik
    initialValues={{'fromCurrencyCode': 'AUD', 'toCurrencyCode': 'USD', 'amount': 1000}}
    enableReinitialize={true}
    validate={values => {
      let errors = {};
      if (!values.firstName || values.firstName.trim() === '') {
        errors.firstName = 'Required';
      }
      if (!values.lastName || !values.firstName.trim() === '') {
        errors.lastName = 'Required';
      }

      if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if(values.fromCurrencyCode === values.toCurrencyCode){
        errors.toCurrencyCode = 'to currency should not be equal to from currency';
      }

      if(isNaN(values.amount) || values.amount <= 0){
        errors.amount = 'Invalid amount';
      }

      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      props.createQuotation(values);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      setFieldValue,
      /* and other goodies */
    }) => (
      <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group required">
            <label className="control-label" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              placeholder="First Name"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.firstName && touched.firstName ? 'text-input error form-control' : 'text-input form-control'
              }
            />
             {errors.firstName && touched.firstName && (
              <div className="input-feedback">{errors.firstName}</div>
            )}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group required">
            <label className="control-label" htmlFor="firstName">
            Last Name
            </label>
            <input
            id="lastName"
            placeholder="Last Name"
            type="text"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.lastName && touched.lastName ? 'text-input error form-control' : 'text-input form-control'
            }
            />
            {errors.lastName && touched.lastName && (
              <div className="input-feedback">{errors.lastName}</div>
            )}
            </div>
          </div>
        </div>
        <div className="form-group">
        <label htmlFor="email" style={{ display: 'block' }}>
            Email
        </label>
        <input
            id="email"
            placeholder="Email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.email && touched.email ? 'text-input error form-control' : 'text-input form-control'
            }
        />
        {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
        </div>
        <div>
        <label htmlFor="phone" style={{ display: 'block' }}>
            Telephone / Mobile
        </label>
        <ReactPhoneInput
          id="phone"
          name="phone"
          defaultCountry="au"
          value={values.phone}
          onChange={(value) => setFieldValue('phone', value)}
        />
        {errors.phone && touched.phone && errors.phone}
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group required">
            <label className="control-label" htmlFor="firstName">
              From Currency
            </label>
            <select
              name="fromCurrencyCode"
              value={values.fromCurrencyCode}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ display: 'block' }}
              className="form-control"
            >
              {
              props.currencies ? (
                props.currencies.map(currency => (<option value={currency.code} label={currency.name} />))
              ) : null
              }
            </select>
            {errors.fromCurrencyCode && touched.fromCurrencyCode && errors.fromCurrencyCode}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group required">
            <label className="control-label" htmlFor="firstName">
            To Currency
            </label>
            <select
              name="toCurrencyCode"
              value={values.toCurrencyCode}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ display: 'block' }}
              className="form-control"
            >
              {
              props.currencies ? (
                props.currencies.map(currency => (<option value={currency.code} label={currency.name} />))
              ) : null
              }
            </select>
            {errors.toCurrencyCode && touched.toCurrencyCode && (
              <div className="input-feedback">{errors.toCurrencyCode}</div>
            )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group required">
            <label className="control-label" htmlFor="firstName">
            Amount
            </label>
            <input
              id="amount"
              placeholder="amount"
              type="text"
              value={values.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
              errors.amount && touched.amount ? 'text-input error form-control' : 'text-input form-control'
            }
            />
            {errors.amount && touched.amount && (
              <div className="input-feedback">{errors.amount}</div>
            )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-md-4 mx-auto">
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          GET QUOTE
          </button>
          </div>
        </div>
        </div>
      </form>
    )}
  </Formik>
  </div>
  </div>
  </div>
  )
};

const mapStateToProps = state => ({
  jobDone: state.quotations.jobDone,
  currencies: state.currencies.currencies
})

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: () => dispatch(actions.fetchCurrencies()),
  createQuotation: (quotation) => dispatch(actions.createQuotation(quotation))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetQuotation);
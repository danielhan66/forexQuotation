import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'

const GetQuotation = props => {
  return (
    <div>
    <header className="header"><h1>Quick Quote</h1></header>
    <div class="card">
    <div class="card-body">
    <Formik
    initialValues={{'id': 0}}
    enableReinitialize={true}
    validate={values => {
      let errors = {};
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
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
      /* and other goodies */
    }) => (
      <form onSubmit={handleSubmit}>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="form-group required">
            <label class="control-label" htmlFor="firstName">
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
            {errors.firstName && touched.firstName && errors.firstName}
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group required">
            <label class="control-label" htmlFor="firstName">
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
            {errors.lastName && touched.lastName && errors.lastName}
            </div>
          </div>
        </div>
        <div class="form-group">
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
        {errors.email && touched.email && errors.email}
        </div>
        <div>
        <label htmlFor="phone" style={{ display: 'block' }}>
            Telephone / Mobile
        </label>
        <ReactPhoneInput
          defaultCountry="au"
          value={'+610452188660'}
          onChange={() => console.log('123')}
        />
        {errors.phone && touched.phone && errors.phone}
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="form-group required">
            <label class="control-label" htmlFor="firstName">
              From Currency
            </label>
            <select
              name="fromCurrencyCode"
              value={values.fromCurrencyCode}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ display: 'block' }}
              class="form-control"
            >
              <option value="" label="Select a currency" />
            </select>
            {errors.fromCurrencyCode && touched.fromCurrencyCode && errors.fromCurrencyCode}
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group required">
            <label class="control-label" htmlFor="firstName">
            To Currency
            </label>
            <select
              name="toCurrencyCode"
              value={values.toCurrencyCode}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ display: 'block' }}
              class="form-control"
            >
              <option value="" label="Select a currency" />
            </select>
            {errors.toCurrencyCode && touched.toCurrencyCode && errors.toCurrencyCode}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="form-group required">
            <label class="control-label" htmlFor="firstName">
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
            {errors.amount && touched.amount && errors.amount}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4 mx-auto">
          <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
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

export default connect()(GetQuotation);
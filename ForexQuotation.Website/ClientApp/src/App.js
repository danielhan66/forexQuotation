import React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout';
import GetQuotation from './components/GetQuotation';
import QuotationHistory from './components/QuotationHistory';
import QuotationResult from './components/QuotationResult';

export default () => (
  <Layout>
    <Route exact path='/' component={GetQuotation} />
    <Route path='/quotation_history' component={QuotationResult} />
  </Layout>
);

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {QuotationHistory} from './QuotationHistory'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    quotations: [],
    fetchQuotations: jest.fn(),
  }

  const enzymeWrapper = shallow(<QuotationHistory {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('QuotationHistory', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)    
  })
})
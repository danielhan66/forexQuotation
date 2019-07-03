import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {QuotationResult} from './QuotationResult'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    quotation: {},
  }

  const enzymeWrapper = shallow(<QuotationResult {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('QuotationResult', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)    
  })
})
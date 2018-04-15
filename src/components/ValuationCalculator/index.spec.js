import React from 'react';
import renderer from 'react-test-renderer';
import ValuationCalculator from './';

describe('Valuation Calculator', () => {

  const properties = [
    {
      price: 300000,
      floorArea: 300
    },{
      price: 500000,
      floorArea: 500
    },{
      price: 1000000,
      floorArea: 500
    }
  ]

  it('renders', () => {
    const component = renderer.create(< ValuationCalculator properties={properties} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  });

  const wrapper = shallow(<ValuationCalculator properties={properties} />).instance()

  describe('#getAllFootageCosts', () => {
    it('returns an array of price per square foot per property', () => {
      const expectedResult = [1000, 1000, 2000]
      expect(wrapper.getAllFootageCosts()).toEqual(expectedResult)
    })
  });

  describe('#getAverageFootageCost', () => {
    it('returns a rounded average of all numbers', () => {
      const expectedResult = 1333
      expect(wrapper.getAverageFootageCost()).toEqual(expectedResult)
    })
  });

  describe('#caculateCalue', () => {
    it('returns the price of a 1,100 sq ft property based on average', () => {
      const expectedResult = 1466300
      expect(wrapper.calculateValue()).toEqual(expectedResult)
    })
  });

});

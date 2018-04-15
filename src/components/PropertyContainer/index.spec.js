import React from 'react';
import renderer from 'react-test-renderer';
import PropertyContainer from './';
import Property from '../Property';

describe('Property Container', () => {
  const propertyList = [
    {
      "address": "test address 1",
      "price": 10000,
      "floor_area": 100
    },
    {
      "address": "test address 2",
      "price": 20000,
      "floor_area": 200
    },
  ]

  it('renders', () => {
    const component = renderer.create(< PropertyContainer properties = { propertyList } />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  });

  it('displays a Property component for each passed property', () => {
    const wrapper = shallow(<PropertyContainer properties={propertyList} />)
    expect(wrapper.find('.properties').children().length).toEqual(propertyList.length)
  });

});

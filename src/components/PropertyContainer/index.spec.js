import React from 'react';
import renderer from 'react-test-renderer';
import propertyList from'../../testSetup/propertyFixtures'
import PropertyContainer from './';
import Property from '../Property';

describe('Property Container', () => {
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

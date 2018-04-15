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

  describe('#isPropertySelected', () => {
    const wrapper = shallow(<PropertyContainer properties={propertyList} />)
    wrapper.setState({selectedProperties: [1,2,3]})
    const instance = wrapper.instance()
    it('is true when a property is selected', () => {
      expect(instance.isPropertySelected(2)).toEqual(true)
    })

    it('is false when a property is not selected', () => {
      expect(instance.isPropertySelected(8)).toEqual(false)
    })
  });

  describe('#addProperty', () => {
    it('adds a property to the selectedProperty array', () => {
      const wrapper = shallow(<PropertyContainer properties={propertyList} />)
      wrapper.setState({ selectedProperties: [1, 2, 3] })
      const instance = wrapper.instance()
      instance.addProperty(5)
      expect(instance.state.selectedProperties).toEqual([1,2,3,5])
    })
  });

  describe('#removeProperty', () => {
    it('removes a property to the selectedProperty array', () => {
      const wrapper = shallow(<PropertyContainer properties={propertyList} />)
      wrapper.setState({ selectedProperties: [1, 2, 3] })
      const instance = wrapper.instance()
      instance.removeProperty(3)
      expect(instance.state.selectedProperties).toEqual([1, 2])
    })
  });

});

import React from 'react';
import renderer from 'react-test-renderer';
import Property from './';

describe('Property', () => {
  const testAddress = "1 Test Street"
  const testPrice = 100000
  const testArea = 1000


  describe('when not selected', () => {
    it('renders ', () => {
      const component = renderer.create(
        <Property
          address={testAddress}
          price={testPrice}
          floorArea={testArea}
          selected={false}
          select={() => { }}

      />)
      const tree = component.toJSON()

      expect(tree).toMatchSnapshot()
    });

    const wrapper = shallow(<Property
      address={testAddress}
      price={testPrice}
      floorArea={testArea}
      selected={false}
      select={() => { }}
    />)

    it('displays the given address', () => {
      expect(wrapper.find('.address').text()).toEqual(`Address: ${testAddress}`)
    });

    it('displays the given price', () => {
      expect(wrapper.find('.price').text()).toEqual(`Value: £${testPrice}`)
    });

    it('displays the given floor area', () => {
      expect(wrapper.find('.floor_area').text()).toEqual(`Floor area(sq ft): ${testArea}`)
    });

    it('does not have an active className', () => {
      expect(wrapper.hasClass('active')).toEqual(false)
    })
  });

  describe('when selected', () => {
    it('renders ', () => {
      const component = renderer.create(
        <Property
          address={testAddress}
          price={testPrice}
          floorArea={testArea}
          selected={true}
          select={() => { }}

        />)
      const tree = component.toJSON()

      expect(tree).toMatchSnapshot()
    });

    const wrapper = shallow(<Property
      address={testAddress}
      price={testPrice}
      floorArea={testArea}
      selected={true}
      select={() => { }}
    />)

    it('has an active className', () => {
      expect(wrapper.hasClass('active')).toEqual(true)
    });
  });
});

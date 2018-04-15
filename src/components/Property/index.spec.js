import React from 'react';
import renderer from 'react-test-renderer';
import Property from './';

describe('Property', () => {
  const testAddress = "1 Test Street"
  const testPrice = 100000
  const testArea = 1000

  const wrapper = shallow(<Property address={testAddress} price={testPrice} floorArea={testArea} />)

  it('renders', () => {
    const component = renderer.create(
      <Property
        address={testAddress}
        price={testPrice}
        floorArea={testArea}
    />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  });

  it('displays the given address', () => {
    expect(wrapper.find('.address').text()).toEqual(`Address: ${testAddress}`)
  });

  it('displays the given price', () => {
    expect(wrapper.find('.price').text()).toEqual(`Value: £${testPrice}`)
  });

  it('displays the given floor area', () => {
    expect(wrapper.find('.floor_area').text()).toEqual(`Floor area(sq ft): ${testArea}`)
  });
});

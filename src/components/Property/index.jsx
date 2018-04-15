import React from 'react';
import { string, number } from 'prop-types';

const Property = ({address, price, floorArea}) => (
  <li className='property'>
    <p className='address'>Address: {address}</p>
    <p className='price'>Value: £{price}</p>
    <p className='floor_area'>Floor area(sq ft): {floorArea}</p>
  </li>
);

Property.propTypes = {
  address: string.isRequired,
  price: number. isRequired,
  floorArea: number.isRequired
};

export default Property;

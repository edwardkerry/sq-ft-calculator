import React from 'react';
import { string, number } from 'prop-types';

const Property = ({address, price, floor_area}) => (
  <li className='property'>
    <p className='address'>Address: {address}</p>
    <p className='price'>Value: £{price}</p>
    <p className='floor_area'>Floor area(sq ft): {floor_area}</p>
  </li>
);

Property.propTypes = {
  address: string.isRequired,
  price: number. isRequired,
  floor_area: number.isRequired
};

export default Property;

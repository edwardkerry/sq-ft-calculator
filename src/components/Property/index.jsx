import React from 'react';
import { string, number, bool, func } from 'prop-types';

import './styles.scss'

const getClassName = (selected) => selected ? ' active' : ''

const Property = ({address, price, floorArea, select, selected}) => (
  <li onClick={select} className={`property${getClassName(selected)}`} >
      <p className='address'>Address: {address}</p>
      <p className='price'>Value: £{price}</p>
      <p className='floor_area'>Floor area(sq ft): {floorArea}</p>
  </li>
);

Property.propTypes = {
  address: string.isRequired,
  price: number. isRequired,
  floorArea: number.isRequired,
  selected: bool.isRequired,
  select: func.isRequired
};

export default Property;

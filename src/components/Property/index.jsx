import React from 'react';
import { string, number, bool, func } from 'prop-types';

const getClassName = (selected) => selected ? ' active' : ''

const Property = ({address, price, floorArea, select, selected}) => (
  <li>
    <a className={`property${getClassName(selected)}`}
      onClick={select}
    >
      <p className='address'>Address: {address}</p>
      <p className='price'>Value: £{price}</p>
      <p className='floor_area'>Floor area(sq ft): {floorArea}</p>
    </a>
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

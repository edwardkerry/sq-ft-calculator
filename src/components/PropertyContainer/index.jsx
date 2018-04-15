import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Property from '../Property';

const PropertyContainer = ({properties}) => (
  <ul className='properties'>
    {properties.map((property, index) => {
        return (<Property
          address={property.address}
          price={property.price}
          floor_area={property.floor_area}
          key={index}
        />)
      })}
  </ul>
);

PropertyContainer.propTypes = {
  properties: arrayOf(
    shape({
      address: string.isRequired,
      price: number.isRequired,
      floor_area: number.isRequired
    }).isRequired
  ).isRequired
};

export default PropertyContainer;

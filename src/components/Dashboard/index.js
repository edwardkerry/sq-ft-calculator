import React from 'react';
import propertyList from '../../../properties';
import PropertyContainer from '../PropertyContainer';
import ValuationCalculator from '../ValuationCalculator';

import './styles.scss'

export default () => (
  <div className="dashboard">
    <PropertyContainer properties={propertyList}/>
    <ValuationCalculator properties={propertyList} />
  </div>
);

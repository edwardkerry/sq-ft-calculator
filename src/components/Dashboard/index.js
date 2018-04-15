import React from 'react';
import propertyList from '../../../properties';
import PropertyContainer from '../PropertyContainer';

import './styles.scss'
import ValuationCalculator from '../ValuationCalculator';

export default () => (
  <div className="dashboard">
    <PropertyContainer properties={propertyList}/>
    <ValuationCalculator properties={propertyList} />
  </div>
);

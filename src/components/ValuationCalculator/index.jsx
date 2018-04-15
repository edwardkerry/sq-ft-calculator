import React, { Component } from 'react';
import { arrayOf, shape, number } from 'prop-types';

import './styles.scss';

class ValuationCalculator extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }

    this.getAllFootageCosts = this.getAllFootageCosts.bind(this)
    this.getAverageFootageCost = this.getAverageFootageCost.bind(this)
    this.calculateValue = this.calculateValue.bind(this)
  }

  componentDidMount() {
    this.setState({
      value: this.calculateValue()
    })
  }

  getAllFootageCosts() {
    return this.props.properties.map((property) => {
      return Math.round(property.price / property.floor_area)
    })
  }

  getAverageFootageCost() {
    const allFootageCosts = this.getAllFootageCosts()
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return Math.round(allFootageCosts.reduce(reducer) / allFootageCosts.length)
  }

  calculateValue() {
    const averageCostPerFoot = this.getAverageFootageCost()
    return averageCostPerFoot * 1100
  }

  render() {
    return (
      <div className='valuation'>
        A 1,100 sq ft property will cost
        <p className='price'>£{this.state.value} </p>
      </div>
    )
  };
}

ValuationCalculator.propTypes = {
  properties: arrayOf(
    shape({
      price: number.isRequired,
      floor_area: number.isRequired
    }).isRequired
  ).isRequired
};

export default ValuationCalculator;

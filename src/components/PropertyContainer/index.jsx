import React, { Component} from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Property from '../Property';

class PropertyContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedProperties: []
    }

    this.togglePropertySelect = this.togglePropertySelect.bind(this)
    this.isPropertySelected = this.isPropertySelected.bind(this)
    this.addProperty = this.addProperty.bind(this)
    this.removeProperty = this.removeProperty.bind(this)
  }

  isPropertySelected(index) {
    return this.state.selectedProperties.includes(index)
  }

  removeProperty(index) {
    this.setState({
      selectedProperties: this.state.selectedProperties.filter(prop => prop !== index)
    })
    console.log(this.state)
  }

  addProperty(index) {
    this.setState({
      selectedProperties: [...this.state.selectedProperties, index]
    })
  }

  togglePropertySelect(index) {
    this.isPropertySelected(index) ?
    this.removeProperty(index):
    this.addProperty(index)
    console.log('toggled!')
  }

  render() {
    return(
      <ul className='properties'>
        {this.props.properties.map((property, index) => {
            return (<Property
              address={property.address}
              price={property.price}
              floorArea={property.floor_area}
              select={() => {this.togglePropertySelect(index)}}
              selected={this.isPropertySelected(index)}
              key={index}
            />)
          })}
      </ul>
    )
  }
};

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

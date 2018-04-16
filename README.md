# Square Foot Valuation Calculator

This is a simple React application to estimate the price of a 1,100 sq foot property, based on the average price of some user selected properties.

## Installation and running

To install necessary pacakages:
`npm install`

To run test:
`npm run test`

To run the dev server:
`npm run dev`

Navigate to:
`localhost:8080`
## Components and application flow

### Dashboard

The Dashboard is a simple wrapper container that reads the properties from a JSON file and passes these to its children: the PropertyContainer and the ValuationCalculator.

### PropertyContainer

This is a stateful container that receives an array of properties, and renders each of these as a Property component.

It maintains a list in state of which Property components a user has clicked on, adding or removing these as appropriate.

In addition to simple props, it passes each Property a callback to use onClick to update state, and a boolean to inform if it is currently selected or not.

### Property

This is a simple presentational component that renders props passed to it. On click it will activate a callback function, and if passed a `true` value will apply an `active` className.

### ValuationCalculator

This is another stateful component that is responsible for calculating the estimated valuation. It receives an array of property information from which it establishes the average price per square foot. It uses this to return the estimated price for a 1,100 sq ft property. This area is currently hard-coded as a magic number.

Whilst tested with other properties, it currently recives the full property list; selecting and deselecting properties has no effect.

## Notes

As a starting point I decided not to introduce a state management technology. The application is now at a state where the PropertyContainer has knowledge of which properties have been selected, and the ValuationCalculator needs access to this information. I believe now would be a suitable point to use Redux to better manage state.

Rather than requiring the properties direct from the `properties.js` file (which is proxying for an API call), when the requiring component mounts it would use this information to create some models with a `selected` attribute. These would be stored in application state. When each property is clicked it may dispatch an action to the Redux reducers to update the state for that model. The ValuationCalculator would have this state mapped to props, and would only calculate on those properties that are currently selected.

I would also consider changing the terminology, as there is already room for confusion between the domain 'property' and React 'props'. 

The application is unit tested with Jest and Enzyme.

Styles are rudimentary (and ugly!) but do indicate selected/non-selected properties.

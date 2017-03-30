/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import {Radio, RadioGroup} from 'react-radio-group';
import s from './FilterBar.css';

class FilterBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'distanceFromUs',
      distance: '100',
      recommendationLevel: ['4', '3', '2', '1'],
      interestLevel: ['4', '3', '2', '1'],
      priceRange: ['1', '2', '3', '4'],
      openNow: 'true'
    };
  }

  componentWillMount() {
      this.props.callbackParent(this.state);
  }

  handleChange(refName, selections) {
    console.log('this: ', this);
    console.log('refName: ', refName);
    console.log('selections: ', selections);
    console.log('\n');

    var newState = {};
    newState[refName] = selections;
    
    this.setState(newState);

    var updatedState = this.state;
    updatedState[refName] = newState[refName];
    console.log('FilterBar updatedState variable: ', updatedState);

    this.props.callbackParent(updatedState);
  };







  render() {
    var component = this;

    return (
      <div>
        <RadioGroup
          name="sortBy"
          ref="sortBy"
          selectedValue={this.state.sortBy}
          onChange={this.handleChange.bind(this, 'sortBy')}>
          <label><Radio value="distanceFromUs" />Distance From Us</label>
          <label><Radio value="distanceFromHotel" />Distance From Hotel</label>
          <label><Radio value="mostRecommended" />Most Recommended</label>
          <label><Radio value="mostInteresting" />Most Interesting</label>
          <label><Radio value="priceRange" />Price Range</label>
        </RadioGroup>
        <RadioGroup
          name="distance"
          ref="distance"
          selectedValue={this.state.distance}
          onChange={this.handleChange.bind(this, 'distance')}>
          <label><Radio value="0.5" />Within 4 Blocks</label>
          <label><Radio value="1.5" />Walking (1.5 mi)</label>
          <label><Radio value="5" />Bus/Subway (5 mi)</label>
          <label><Radio value="100" />Show All</label>
        </RadioGroup>
        <CheckboxGroup
          name="recommendationLevel"
          ref="recommendationLevel"
          value={this.state.recommendationLevel}
          onChange={this.handleChange.bind(this, 'recommendationLevel')}>
          <label><Checkbox value="4" />Very Highly Recommended</label>
          <label><Checkbox value="3" />Highly Recommended</label>
          <label><Checkbox value="2" />Recommended</label>
          <label><Checkbox value="1" />Somewhat Recommended</label>
        </CheckboxGroup>
        <CheckboxGroup
          name="interestLevel"
          ref="interestLevel"
          value={this.state.interestLevel}
          onChange={this.handleChange.bind(this, 'interestLevel')}>
          <label><Checkbox value="4" />Must Visit</label>
          <label><Checkbox value="3" />Try Hard To Visit</label>
          <label><Checkbox value="2" />Try To Visit</label>
          <label><Checkbox value="1" />Visit If Possible</label>
        </CheckboxGroup>
        <CheckboxGroup
          name="priceRange"
          ref="priceRange"
          value={this.state.priceRange}
          onChange={this.handleChange.bind(this, 'priceRange')}>
          <label><Checkbox value="1" />€</label>
          <label><Checkbox value="2" />€€</label>
          <label><Checkbox value="3" />€€€</label>
          <label><Checkbox value="4" />€€€€</label>
        </CheckboxGroup>
        <RadioGroup
          name="openNow"
          ref="openNow"
          selectedValue={this.state.openNow}
          onChange={this.handleChange.bind(this, 'openNow')}>
          <label><Radio value="true" />Open Now</label>
          <label><Radio value="false" />Show All</label>
        </RadioGroup>
      </div>
    );
  }
}

export default FilterBar;
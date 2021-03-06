import React, { Component } from 'react';
import axios from 'axios';

import SpacexCard from './SpacexCard';

class SpacexContainer extends Component {
  constructor() {
    super();

    this.state = {
      astronomy: null, // to allow displaying data once this gets a value
    }
  }

  componentDidMount() {
    //const API_KEY = 'xbyfEsX7avwpCokxTPgQhCJdUlff52Hk9I9E6S9E';
    const END_POINT = 'https://api.spacexdata.com/v3/launches/latest';

    axios.get(END_POINT)
      .then(response => {
        this.setState({
          astronomy: response.data
        });
      })
      .catch(error => {
        console.log(error, 'failed to fetch data');
      });
  }

  render() {
    const { astronomy } = this.state;
    return(
      <React.Fragment>
        <SpacexCard data={astronomy} />
      </React.Fragment>
    )
  }
}

export default SpacexContainer;

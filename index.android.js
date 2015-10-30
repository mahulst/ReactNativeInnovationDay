/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

import TrackTraceList from './shared/components/TrackTraceList.js';
import mockShipments from  './shared/data/mockShipments.json';

const ReactNativeInnovationDay = React.createClass({
  render: () => {
    const {results: shipments} = mockShipments;
    return (
      <TrackTraceList {...{shipments}}/>
    );
  }
});

AppRegistry.registerComponent('ReactNativeInnovationDay', () => ReactNativeInnovationDay);

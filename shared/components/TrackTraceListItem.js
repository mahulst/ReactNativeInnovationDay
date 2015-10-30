import React from 'react-native';
const {StyleSheet, Text, View, Image} = React;

import Button from './Button.js';

class TrackTraceListItem extends React.Component {
  render() {
    const {shipment: {consignmentNumber, deliveryTown}} = this.props;

    var icon = {
      'COLING': require('image!coling'),
      'COLTED': require('image!colted'),
      'DELING': require('image!deling'),
      'DELRED': require('image!delred'),
      'INTRAN': require('image!intran'),
    }[this.props.shipment.statusData[0].groupCode];

    return <View>
      <Image source={icon}
             style={{width: 300, height: 300}}/>
      <Text>{consignmentNumber}</Text>
      <Text>{deliveryTown}</Text>
      <Button text="Details"/>
    </View>;
  }
}

export default TrackTraceListItem;

import React from 'react-native';
import ProgressIndicator from './ProgressIndicator.js';
const {StyleSheet, Text, View} = React;

class TrackTraceListItem extends React.Component {
  render() {
    const {shipment: {consignmentNumber, deliveryTown, statusData}} = this.props;
    return <View>
            <Text>{consignmentNumber}</Text>
            <Text>{deliveryTown}</Text>
            <ProgressIndicator {...{statusData}}/>
            <Text></Text>
          </View>;
  }
}

export default TrackTraceListItem;

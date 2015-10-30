import React from 'react-native';
const {StyleSheet, Text, View} = React;

class TrackTraceListItem extends React.Component {
  render() {
    const {shipment: {consignmentNumber, deliveryTown}} = this.props;
    return <View><Text>{consignmentNumber}</Text><Text>{deliveryTown}</Text></View>;
  }
}

export default TrackTraceListItem;

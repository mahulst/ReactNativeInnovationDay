import React from 'react-native';
const {StyleSheet, Text, View, Image} = React;
import  {MKButton} from 'react-native-material-kit';

const ColoredRaisedButton = MKButton.coloredButton()
  .withText('BUTTON')
  .build();

class TrackTraceListItem extends React.Component {
  render() {
    const {shipment: {consignmentNumber, deliveryTown}} = this.props;

    var icon = {
        'COLING' : require('image!coling'),
        'COLTED' : require('image!colted'),
        'DELING' : require('image!deling'),
        'DELRED' : require('image!delred'),
        'INTRAN' : require('image!intran'),
    }[this.props.shipment.statusData[0].groupCode];

    return <View>
      <Image source={icon}
             style={{width: 300, height: 300}}/>
      <Text>{consignmentNumber}</Text>
      <Text>{deliveryTown}</Text>
      <ColoredRaisedButton/>
    </View>;
  }
}

export default TrackTraceListItem;

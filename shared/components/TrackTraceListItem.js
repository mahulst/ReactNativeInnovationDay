import React from 'react-native';
const {StyleSheet, Text, View, Image, TouchableHighlight} = React;
//import  {MKButton} from 'react-native-material-kit';

//const ColoredRaisedButton = MKButton.coloredButton()
//  .withText('BUTTON')
//  .build();

class TrackTraceListItem extends React.Component {
  constructor() {
    super();
  }
  pressShowDetails() {
    console.log(123)
  }
  render() {
  
    var icon = {
        'COLING' : require('image!coling'),
        'COLTED' : require('image!colted'),
        'DELING' : require('image!deling'),
        'DELRED' : require('image!delred'),
        'INTRAN' : require('image!intran')
    }[this.props.shipment.statusData[0].groupCode];
    
      return  <View style={styles.container}>
                  <View style={styles.card}>
                      <View style={styles.contentBlock}>
                          <Text style={styles.header}>FROM</Text>
                          <Text style={styles.content}>{originDepotName}, {originCountry}</Text>
                      </View>
                      <View style={styles.contentBlock}>
                          <Text style={styles.header}>ESTIMATED DELIVERY IN</Text>
                          <Text style={styles.content}>{deliveryTown}, {destinationCountry}</Text>
                          <Text style={styles.content}>{deliveryDueDate}</Text>
                      </View>
                      <Image source={icon}
                             style={{width: 298, height: 200}} />
                      <View style={styles.contentBlock}>
                          <Text style={styles.header}>SHIPMENT NUMBER</Text>
                          <Text style={styles.content}>{consignmentNumber}</Text>
                      </View>
                      <View style={styles.contentBlock}>
                          <Text style={styles.content}>{pieceQuantity} ITEM(S)</Text>
                      </View>
                  </View>
                  <View style={styles.toggle}>
                      <TouchableHighlight onPress={this.pressShowDetails}>
                          <View>
                              <Text style={styles.toggleButton}>Show Details</Text>
                          </View>
                      </TouchableHighlight>
                  </View>
              </View>;
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    borderWidth: 1,
    borderColor: '#dfdfdf',
    borderBottomWidth: 0,
    width: 300,
    margin: 20,
    marginBottom: 0
  },
  header:{
    fontSize: 14,
    color: '#999',
    padding: 5,
    paddingLeft: 0
  },
  contentBlock: {
    padding: 18,
    marginBottom: 8
  },
  content: {
    color: '#333f48',
    fontSize: 20,
    lineHeight: 24,
    marginBottom:5
  },
  toggle: {
    borderWidth: 1,
    borderColor: '#dfdfdf',
    width: 300,
    padding: 18,
    marginBottom: 20

  },
  toggleButton: {
    paddingBottom: 0,
    color: '#f60',
    fontSize: 20
  }
});

export default TrackTraceListItem;

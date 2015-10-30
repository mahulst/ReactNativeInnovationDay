import React from 'react-native';
const {ListView, StyleSheet, Text} = React;

class TrackTraceList extends React.Component {
  constructor({shipments}) {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(shipments)
    };
  }

  render() {
    return ( <ListView dataSource={this.state.dataSource}
                       renderRow={({consignmentNumber}) => <Text>{consignmentNumber}</Text>}
      />
    );
  }
}

export default TrackTraceList;

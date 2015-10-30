import React from 'react-native';
import ProgressIndicatorItem from './ProgressIndicatorItem.js';
const {StyleSheet, Text, View, ListView} = React;

class ProgressIndicator extends React.Component {
  render() {
    const {statusData} = this.props;
    const parsedStatusData = statusData
      .reduce((previous, current) => {
        if (current.groupCode && previous.map(({ groupCode}) => groupCode).indexOf(current.groupCode) === -1) {
          return previous.concat(current);
        } else {
          return previous;
        }
      }, []);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(parsedStatusData)
    };
    return ( <ListView dataSource={this.state.dataSource}
                       renderRow={statusData => <ProgressIndicatorItem {...{statusData}}/>}
      />);
  }
}

export default ProgressIndicator;

import React from 'react-native';
const {StyleSheet, Text, View} = React;

class ProgressIndicatorItem extends React.Component {
  render() {
    const { statusData: {groupCode, localEventDate, localEventTime}} = this.props;
    return <View>
            <Text>{groupCode}</Text>
            <Text>{localEventDate} on {localEventTime}</Text>
          </View>;
  }
}

export default ProgressIndicatorItem;

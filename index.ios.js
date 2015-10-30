import React from 'react-native';
const {
  AppRegistry
  } = React;

import { Provider} from 'react-redux/native.js';

import store from './shared/data/redux/store.js';

import TrackTraceList from './shared/containers/TrackTraceView.js';

class ReactNativeInnovationDay extends React.Component {
  render() {
    return <Provider {...{store}}>{() => <TrackTraceList />}</Provider>;
  }
}

AppRegistry.registerComponent('ReactNativeInnovationDay', () => ReactNativeInnovationDay);

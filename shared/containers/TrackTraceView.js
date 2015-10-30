import React from 'react-native';
import {connect} from 'react-redux/native.js';

import TrackTraceList from '../components/TrackTraceList.js';


class TrackTraceView extends React.Component {
  render() {
    const {shipments} = this.props;
    return <TrackTraceList {...{shipments}}/>;
  }
}

export default connect(({shipments}) => ({shipments}))(TrackTraceList);

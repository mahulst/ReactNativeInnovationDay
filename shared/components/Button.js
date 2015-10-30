import React from 'react-native';
import  {MKButton} from 'react-native-material-kit';

export default class Button extends React.Component {
  render() {
    const {text} = this.props;
    const ColoredButton = MKButton.coloredButton()
      .withText(text)
      .build();

    return <ColoredButton/>
  }
}

import React, {Component} from 'react';

import Navigator from './src/components/Navigator';

// import GlobalFont from 'react-native-global-font'

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
       header: null,
    };
// componentDidMount() 
//   {
//      let fontName = 'Lato'
//      GlobalFont.applyGlobal(fontName)
//   } 
  
  render() {
    return <Navigator />;
  }
}


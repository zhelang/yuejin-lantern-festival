import React from 'react';
import { ScrollView, StyleSheet, WebView } from 'react-native';
import { Constants } from 'expo';

import Layout from '../constants/Layout';

export default class WebScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const url = 'https://www.2018yuejinlanternfestival.com/';
    return (
      <WebView
        source={{uri: url}}
        style={styles.container}
        initialScale='100'
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: Layout.window.width,
    height: Layout.window.height,
  },
});

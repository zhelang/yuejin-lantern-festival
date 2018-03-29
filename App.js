import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        /*require('./assets/images/01.jpg'),
        require('./assets/images/02.jpg'),
        require('./assets/images/03.jpg'),
        require('./assets/images/04.jpg'),
        require('./assets/images/05.jpg'),
        require('./assets/images/06.jpg'),
        require('./assets/images/07.jpg'),
        require('./assets/images/08.jpg'),
        require('./assets/images/09.jpg'),
        require('./assets/images/10.jpg'),
        require('./assets/images/11.jpg'),
        require('./assets/images/12.jpg'),
        require('./assets/images/13.jpg'),
        require('./assets/images/14.jpg'),
        require('./assets/images/15.jpg'),
        require('./assets/images/16.jpg'),
        require('./assets/images/17.jpg'),
        require('./assets/images/18.jpg'),
        require('./assets/images/19.jpg'),
        require('./assets/images/20.jpg'),
        require('./assets/images/21.jpg'),
        require('./assets/images/22.jpg'),
        require('./assets/images/23.jpg'),
        require('./assets/images/24.jpg'),*/
        require('./assets/images/lantern_b.png'),
        require('./assets/images/lantern_y.png'),
        require('./assets/images/header.png'),
        require('./assets/images/footer.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        //'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

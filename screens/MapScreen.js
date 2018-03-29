import React from 'react';
import { Image, Platform, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Constants, Components, MapView, Location, Permissions } from 'expo';

import { markers, themeLantersMarkers, openCallsMarkers } from '../config/data';
import Layout from '../constants/Layout';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };
const THEME_LANTERNS_MARKERS_LIST = [];
const OPEN_CALLS_MARKERS_LIST =[];
const ASPECT_RATIO = Layout.window.width / Layout.window.height;
const LATITUDE = 23.317518;
const LONGITUDE = 120.268328;
const LATITUDE_DELTA = (Platform.OS === 'ios' ? 0.0065 : 0.000009 );
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    mapRegion: { latitude: LATITUDE, longitude: LONGITUDE, latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA },
    locationResult: null,
    location: { coords: {latitude: 0, longitude: 0}},
  };

  componentWillMount() {
    //Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    themeLantersMarkers.map((marker, i) => {
      THEME_LANTERNS_MARKERS_LIST[i] = marker.coordinate;
    });
    openCallsMarkers.map((marker, i) => {
      OPEN_CALLS_MARKERS_LIST[i] = marker.coordinate;
    });
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      this.mapRef.fitToElements(true);
    }
    if (Platform.OS === 'ios') {
      this.mapRef.fitToCoordinates(THEME_LANTERNS_MARKERS_LIST, {
        edgePadding: { top: 50, right: 10, bottom: 50, left: 10},
        animated: false,
      });
    }
  }

  locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    this.setState({location, region})
  }

  onCalloutPressed (index) {
    let calloutRef = `callout-${index}`
    let item = this.refs[calloutRef]
    this.setState({ selectedCalloutIndex: index })
  }

  onMarkerClick = (marker) => {
    this.props.navigation.navigate('Exhibit', { ...marker })
  };

  onPressThemeLaterns() {
    this.mapRef.fitToCoordinates(THEME_LANTERNS_MARKERS_LIST, {
      edgePadding: { top: 50, right: 10, bottom: 50, left: 10},
      animated: false,
    });
  }

  onPressOpenCalls() {
    this.mapRef.fitToCoordinates(OPEN_CALLS_MARKERS_LIST, {
      edgePadding: { top: 50, right: 10, bottom: 50, left: 10},
      animated: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => this.mapRef = ref}
          style={styles.map}
          /*showsUserLocation={true}*/
          region={this.state.region}
          initialRegion={this.state.mapRegion}
          /*toolbarEnabled={true}*/
        >
          {themeLantersMarkers.map((marker, index) => (
            <MapView.Marker
              key={marker.id}
              ref={`callout-${index}`}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.artist}
              onPress={() => this.onCalloutPressed(index)}
              onCalloutPress={() => this.onMarkerClick(marker)}
              zIndex={this.state.selectedCalloutIndex === index ? 999 : 0}>
              <Image 
                source={require('../assets/images/lantern_y.png')} style={{ width: 17, height: 24 }}/>
            </MapView.Marker>
          ))}
          {openCallsMarkers.map((marker, index) => (
            <MapView.Marker
              key={marker.id}
              ref={`callout-${index}`}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.artist}
              onPress={() => this.onCalloutPressed(index)}
              onCalloutPress={() => this.onMarkerClick(marker)}
              zIndex={this.state.selectedCalloutIndex === index ? 999 : 0}>
              <Image 
                source={require('../assets/images/lantern_b.png')} style={{ width: 17, height: 24 }} />
            </MapView.Marker>
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.onPressThemeLaterns()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>主題區</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPressOpenCalls()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>徵件區</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: '#000',
    paddingHorizontal: 18,
    paddingVertical: 12,
    //borderRadius: 20,
  },
  button: {
    marginTop: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#4ac4e2',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
},
});
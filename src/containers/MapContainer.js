import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { characters } from '../data/data.js';
import Callout from './Callout';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
  View,
  AppRegistry,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='ios-ionic'
        size={21}
        color={tintColor}
      />
    ),
  };

  state = {
    showGoodOnly: false,
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Map*/}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={ true }
          region={ this.state.region }
          onRegionChange={ region => this.setState({region}) }
          onRegionChangeComplete={ region => this.setState({region}) }
        >
          {/* Loop through characters and add pins on the map */}
          {characters.map((character, index) =>
              // If showGoodOnly is true, but the character is bad - do not show it
            this.state.showGoodOnly && !character.good || <MapView.Marker
              coordinate={{
                latitude: character.coordinate[0],
                longitude: character.coordinate[1],
              }}
              calloutOffset={{ x: -8, y: 28 }}
              // Greed color for good characters and red for others
              pinColor={character.good ? '#009688' : '#f44336'}
              key={index}
            >
              {/* Callout */}
              <MapView.Callout tooltip style={styles.callout}>
                <Callout
                  name={character.name}
                  image={character.image}
                />
              </MapView.Callout>
            </MapView.Marker>
          )}
        </MapView>
        {/* Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            // Toggle this.state.showGoodOnly
            onPress={() => this.setState({
              showGoodOnly: !this.state.showGoodOnly
            })}
          >
            <Text>{this.state.showGoodOnly ? 'Show All' : 'Show Good Only'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                            // Take up the whole screen
    justifyContent: 'flex-end',         // Arrange button at the bottom
    alignItems: 'center',               // Center button horizontally
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 12,
    width: 160,
  },
  callout: {
    width: 140,
  }
});
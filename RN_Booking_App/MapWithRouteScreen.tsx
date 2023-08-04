import React, { useState, useCallback, useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  getCoordinatesFromAddress,
} from "./utils";
import ModalContent from "./ModalContent";
import Test from "./Test";

const apiKey = "AIzaSyD26QbOA0Qr9KCGlOGgBxEd-7CkAJo5lSsw"; //AIzaSyD26QbOA0Qr9KCGlOGgBxEd-7CkAJo5lSw

const MapWithRouteScreen = () => {
  const mapRef = useRef(null);
  const origin = { latitude: 1.32796, longitude: 103.74442 };
  const destination = { latitude: 1.30718, longitude: 103.83381 };

  const renderMarkers = useCallback(() => {
    return (
      <>
        <Marker coordinate={origin} title="Starting Point" />
        <Marker coordinate={destination} title="Destination Point" />
      </>
    );
  }, []);

  const fitToMarkers = () => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates([origin, destination], {
        edgePadding: { top: -100, right: 100, bottom: 150, left: 100 },
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 1.32796,
          longitude: 103.74442,
          latitudeDelta: 5,
          longitudeDelta: 1,
        }}
        onMapReady={fitToMarkers}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={apiKey}
          strokeWidth={4}
          strokeColor="hotpink"
          mode={"TRANSIT"}
        />
        {renderMarkers()}
      </MapView>

      <View style={styles.buttonContainer}>
        <Button title="Move to Origin" onPress={fitToMarkers} />
      </View>
      {/* <ModalContent />
       */}

      <Test />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    top: WINDOW_HEIGHT / 2.5,
    right: 15,
  },
});

export default MapWithRouteScreen;

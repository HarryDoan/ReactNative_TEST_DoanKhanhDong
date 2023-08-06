import React, { useCallback, useRef } from "react";
import { StyleSheet, View, Pressable, Image, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { WINDOW_HEIGHT } from "../../utils";
import Test from "../../Test";
import { icon } from "../../assets";
import { useNavigation } from "@react-navigation/native";

const apiKey = "API_KEY";

const MapWithRouteScreen = () => {
  const navigation = useNavigation();

  const handleRootBack = () => {
    navigation.navigate("Job", { screen: "BookCarScreen" });
  };
  const mapRef = useRef(null);
  const origin = { latitude: 1.32796, longitude: 103.74442 };
  const destination = { latitude: 1.30718, longitude: 103.83381 };

  const renderMarkers = useCallback(() => {
    return (
      <>
        <Marker coordinate={origin} title="Starting Point" />
        <Marker
          coordinate={destination}
          icon={icon.car_ic_map}
          title="Destination Point"
        />
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
      <StatusBar barStyle="dark-content" />
      <Pressable onPress={handleRootBack} style={styles.iconBackContainer}>
        <Image style={styles.iconBack} source={icon.back} />
      </Pressable>
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
          strokeWidth={5}
          strokeColor="#5791FD"
          mode={"TRANSIT"}
        />
        {renderMarkers()}
      </MapView>
      <View style={styles.buttonContainer}>
        <Pressable onPress={fitToMarkers} style={styles.iconTargetContainer}>
          <Image style={styles.iconTarget} source={icon.target} />
        </Pressable>
      </View>
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
  iconTargetContainer: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  iconTarget: {
    width: 25,
    height: 25,
  },

  iconBackContainer: {
    position: "absolute",
    top: 35,
    left: 15,
    zIndex: 9,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBack: {
    width: 10,
    height: 17,
    resizeMode: "cover",
  },
});

export default MapWithRouteScreen;

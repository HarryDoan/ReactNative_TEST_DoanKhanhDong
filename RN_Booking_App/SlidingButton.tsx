import React, { useRef } from "react";
import { View, PanResponder, Animated, StyleSheet, Text } from "react-native";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "./utils";

const SlidingButton = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > 140) {
          console.log("Button slide complete!");
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View {...panResponder.panHandlers} style={pan.getLayout()}>
        <View style={styles.button} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: WINDOW_HEIGHT * 0.35,
    width: "100%",
    height: 50,
    backgroundColor: "lightblue",
    borderRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
  },
});

export default SlidingButton;

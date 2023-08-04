import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "./utils";
import SlidingButton from "./SlidingButton";

interface ModalContentProps {
  isChange: boolean;
}

const ModalContent = ({ isChange }: ModalContentProps) => {
  const HEIGHT_BETWEEN_TWO_ADDRESS = 100;

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 23,
          paddingVertical: 15,
          backgroundColor: isChange ? "red" : "#1F2630",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Text
            style={{
              fontSize: 28,
              color: "white",
              fontWeight: "600",
              marginRight: 20,
            }}>
            12
          </Text>
          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "300",
              }}>
              December
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#737C8C",
                fontWeight: "300",
              }}>
              N95899
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontWeight: "300",
          }}>
          $65.00
        </Text>
      </View>

      <View
        style={{
          height: WINDOW_HEIGHT,
          backgroundColor: "white",
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}>
        <View
          style={{
            flexDirection: "row",
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: "#1168E9",
              marginRight: 10,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: "#3872CA",
              fontWeight: "600",
            }}>
            STANDARD RIDE
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 18,
            paddingVertical: 25,
            flexDirection: "row",
          }}>
          <View>
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 15,
                backgroundColor: "#1168E9",
              }}
            />
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 6,
                width: 2,
                height: HEIGHT_BETWEEN_TWO_ADDRESS,
                borderRadius: 15,
                backgroundColor: "#1168E9",
              }}
            />
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 15,
                backgroundColor: "#1168E9",
              }}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                marginTop: -5,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "700",
                }}>
                Expo Hall 7
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#737C8C",
                  fontWeight: "400",
                  paddingVertical: 3,
                }}>
                Expo Hall 7, Singapore
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#60BC40",

                  fontWeight: "500",
                }}>
                Picked up
              </Text>
            </View>

            <View
              style={{
                position: "absolute",
                paddingHorizontal: 20,
                top: HEIGHT_BETWEEN_TWO_ADDRESS * 1.3,
                zIndex: 2,
                width: WINDOW_WIDTH * 0.75,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#0390CC",
                  fontWeight: "500",
                }}>
                6:06pm
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "700",
                }}>
                Far East Plaza
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#737C8C",
                  fontWeight: "400",
                  paddingVertical: 3,
                }}>
                14 Scotts Road, Orchard, Singapore
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#60BC40",

                  fontWeight: "500",
                }}>
                Dropped - off
              </Text>
            </View>
          </View>
        </View>

        <SlidingButton />
      </View>
    </View>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // bottom: 0,
    // zIndex: 2,
    // height: "50%",
    // width: "100%",
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
  },
});

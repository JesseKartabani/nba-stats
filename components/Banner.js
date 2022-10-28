import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Banner = () => {
  return (
    <SafeAreaView>
      <Image
        style={styles.banner}
        source={{
          uri: "https://i.imgur.com/hMyneZs.png",
        }}
      />
      <Text style={styles.heading}>2020-2021 Regular Season Top Scorers</Text>
    </SafeAreaView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "700",
    alignSelf: "center",
    fontSize: "16%",
    marginTop: 1,
    marginBottom: 1,
    color: "white",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "135%",
        marginTop: 10,
        marginBottom: 10,
      },
    }),
  },
  banner: {
    width: 220,
    height: 100,
    alignSelf: "center",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        width: 350,
        height: 150,
      },
    }),
  },
});

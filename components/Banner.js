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
    </SafeAreaView>
  );
};

export default Banner;

const styles = StyleSheet.create({
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

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import Banner from "../components/Banner";

const TestScreen = () => {
  return (
    <ImageBackground
      style={styles.backgroundImg}
      source={{ uri: "https://i.imgur.com/Fw7YF2Q.jpg" }}
    >
      <Banner />
      <NavOptions />
    </ImageBackground>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
});

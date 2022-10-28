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
import PlayerCareerStats from "../components/PlayerCareerStats";

const PlayerCareerStatsScreen = () => {
  return (
    <ImageBackground
      style={styles.backgroundImg}
      source={{ uri: "https://i.imgur.com/Fw7YF2Q.jpg" }}
    >
      <Banner />
      <NavOptions />
      <PlayerCareerStats />
    </ImageBackground>
  );
};

export default PlayerCareerStatsScreen;

const styles = StyleSheet.create({
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
});

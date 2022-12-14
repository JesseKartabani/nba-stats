import { StyleSheet, ImageBackground } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import Banner from "../components/Banner";
import PlayerCareerStats from "../components/PlayerCareerStats";

const PlayerCareerStatsScreen = () => {
  return (
    <ImageBackground
      style={styles.backgroundImg}
      source={require("../assets/background.jpg")}
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
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

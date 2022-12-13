import { StyleSheet, ImageBackground } from "react-native";
import React, { useState } from "react";
import NavOptions from "../components/NavOptions";
import Banner from "../components/Banner";
import PlayerCareerStats from "../components/PlayerCareerStats";

const PlayerCareerStatsScreen = () => {
  const [blur, setBlur] = useState([20]);
  return (
    <ImageBackground
      style={styles.backgroundImg}
      source={require("../assets/background.jpg")}
      blurRadius={blur}
      onLoadEnd={() => setBlur(0)}
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

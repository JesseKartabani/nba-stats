import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Banner from "../components/Banner";
import LeagueLeaders from "../components/LeagueLeaders";
import NavOptions from "../components/NavOptions";

const LeagueLeaderScreen = () => {
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
      <ScrollView bounces={false}>
        <LeagueLeaders rank="0" />
        <LeagueLeaders rank="1" />
        <LeagueLeaders rank="2" />
        <LeagueLeaders rank="3" />
        <LeagueLeaders rank="4" />
        <LeagueLeaders rank="5" />
        <LeagueLeaders rank="6" />
        <LeagueLeaders rank="7" />
        <LeagueLeaders rank="8" />
        <LeagueLeaders rank="9" />
      </ScrollView>
    </ImageBackground>
  );
};

export default LeagueLeaderScreen;

const styles = StyleSheet.create({
  backgroundImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

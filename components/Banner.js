import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const Banner = () => {
  // Gets the name of the screen we are on route.name
  const route = useRoute();

  return (
    <SafeAreaView>
      {/* Banner image */}
      <Image
        style={styles.banner}
        source={{
          uri: "https://i.imgur.com/hMyneZs.png",
        }}
      />

      {/* Heading changes depending on screen */}
      <Text style={styles.heading}>
        {route.name != "Player Career Stats" &&
          "2020-2021 Regular Season Top Scorers"}
        {route.name == "Player Career Stats" && "Player Career Stats"}
      </Text>
    </SafeAreaView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "700",
    alignSelf: "center",
    fontSize: "17%",
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

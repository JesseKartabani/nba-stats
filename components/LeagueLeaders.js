import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { fetchLeagueLeaders } from "../fetchers/stats";
import { useQuery } from "@tanstack/react-query";

const LeagueLeaders = ({ rank }) => {
  // For displaying rank to user
  const rankTxt = parseInt(rank) + 1;

  // Gets 2020-2021 regular season top scorers
  const { isError, isSuccess, isLoading, data, error } = useQuery({
    queryKey: ["leagueLeaders"],
    queryFn: () => fetchLeagueLeaders(rank),
  });

  if (isLoading) {
    console.log("loading");
    return <Text>Loading...</Text>;
  }

  if (isError) {
    console.log(error);
    return <Text>Error...</Text>;
  }

  const player = data[rank];

  console.log(player);
  return (
    <SafeAreaView>
      <ScrollView
        centerContent={true}
        horizontal={true}
        style={styles.tableContainer}
      >
        {/* player name and rank */}
        <View style={styles.tableColumn}>
          <Text style={styles.playerNames}>
            {rankTxt}. {player[2]}
          </Text>
        </View>

        {/* players total points in season */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>PTS</Text>
          <Text style={styles.statTxt}>{player[24]}</Text>
        </View>

        {/* player total assists */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>AST</Text>
          <Text style={styles.statTxt}>{player[19]}</Text>
        </View>

        {/* player total rebounds */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>REB</Text>
          <Text style={styles.statTxt}>{player[18]}</Text>
        </View>

        {/* player total field goal percentage rounded to 2 decimal places */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>FG%</Text>
          <Text style={styles.statTxt}>{player[9]?.toFixed(2)}</Text>
        </View>

        {/* player total 3 point shooting percentage rounded to 2 decimal places */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>3PT%</Text>
          <Text style={styles.statTxt}>{player[12]?.toFixed(2)}</Text>
        </View>

        {/* player total free throw % rounded to 2 decimal places */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>FT%</Text>
          <Text style={styles.statTxt}>{player[15]?.toFixed(2)}</Text>
        </View>

        {/* player total steals */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>STL</Text>
          <Text style={styles.statTxt}>{player[20]}</Text>
        </View>

        {/* player total blocks */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>BLK</Text>
          <Text style={styles.statTxt}>{player[21]}</Text>
        </View>

        {/* player total turnovers */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>TO</Text>
          <Text style={styles.statTxt}>{player[22]}</Text>
        </View>

        {/* player total minutes played */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>MIN</Text>
          <Text style={styles.statTxt}>{player[6]}</Text>
        </View>

        {/* players team*/}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>TEAM</Text>
          <Text style={styles.statTxt}>{player[4]}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeagueLeaders;

const styles = StyleSheet.create({
  playerNames: {
    fontWeight: "600",
    color: "white",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "125%",
      },
    }),
  },

  statHeading: {
    fontWeight: "500",
    color: "white",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "105%",
      },
    }),
  },

  statTxt: {
    marginTop: 8,
    color: "white",
    marginRight: 10,
  },

  tableContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(255, 255, 255, 0.7)",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  tableColumn: {
    marginLeft: 25,
    marginTop: 5,
    marginBottom: 5,
  },
});

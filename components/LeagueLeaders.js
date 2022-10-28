import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";

const LeagueLeaders = ({ rank }) => {
  // fetch data
  const [stats, setStats] = useState([]);
  const getLeagueLeaders = async () => {
    try {
      const response = await fetch(
        "https://stats.nba.com/stats/leagueleaders?ActiveFlag=&LeagueID=00&PerMode=Totals&Scope=S&Season=2020-21&SeasonType=Regular+Season&StatCategory=PTS"
      );
      const json = await response.json();
      const data = json.resultSet.rowSet[rank];
      //console.log(data);
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLeagueLeaders();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        centerContent={true}
        horizontal={true}
        style={styles.tableContainer}
      >
        {/* player name */}
        <View style={styles.tableColumn}>
          <Text style={styles.playerNames}>{stats[2]}</Text>
          <Text></Text>
        </View>

        {/* players total points in season */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>PTS</Text>
          <Text style={styles.statTxt}>{stats[23]}</Text>
        </View>

        {/* player total assists */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>AST</Text>
          <Text style={styles.statTxt}>{stats[18]}</Text>
        </View>

        {/* player total rebounds */}
        <View style={styles.tableColumn}>
          <Text style={styles.statHeading}>REB</Text>
          <Text style={styles.statTxt}>{stats[17]}</Text>
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
    textDecorationLine: "underline",
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
    ...Platform.select({
      ios: {},
      android: {},
      default: {},
    }),
  },

  tableContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(255, 255, 255, 0.7)",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        marginLeft: 200,
        marginRight: 200,
      },
    }),
  },

  tableColumn: {
    marginLeft: 25,
    marginTop: 5,
    marginBottom: 5,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        marginLeft: 50,
      },
    }),
  },
});

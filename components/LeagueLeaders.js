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
          <Text>{stats[2]}</Text>
          <Text></Text>
        </View>

        {/* players total points in season */}
        <View style={styles.tableColumn}>
          <Text>PTS</Text>
          <Text>{stats[23]}</Text>
        </View>

        {/* player total assists */}
        <View style={styles.tableColumn}>
          <Text>AST</Text>
          <Text>{stats[18]}</Text>
        </View>

        {/* player total rebounds */}
        <View style={styles.tableColumn}>
          <Text>REB</Text>
          <Text>{stats[17]}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeagueLeaders;

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
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

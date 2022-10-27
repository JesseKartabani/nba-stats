import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

const LeagueLeaders = ({ rank }) => {
  const [stats, setStats] = useState([]);
  // fetch data
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
      <ScrollView centerContent={true} horizontal={true}>
        {/* player name */}
        <View>
          <Text>{stats[2]}</Text>
          <Text></Text>
        </View>

        {/* players total points in season */}
        <View>
          <Text>PTS</Text>
          <Text>{stats[23]}</Text>
        </View>

        {/* player total assists */}
        <View>
          <Text>AST</Text>
          <Text>{stats[18]}</Text>
        </View>

        {/* player total rebounds */}
        <View>
          <Text>REB</Text>
          <Text>{stats[17]}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeagueLeaders;

const styles = StyleSheet.create({});

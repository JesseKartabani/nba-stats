import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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
      console.log(data);
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
      <Text>{stats[2]}</Text>
    </SafeAreaView>
  );
};

export default LeagueLeaders;

const styles = StyleSheet.create({});

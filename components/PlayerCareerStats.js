import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { React, useState, useEffect } from "react";

const PlayerCareerStats = () => {
  {
    /* Endpoint isnt working */
  }
  const [stats, setStats] = useState([]);
  const getPlayerCareerStats = async () => {
    try {
      const response = await fetch(
        "https://stats.nba.com/stats/playercareerstats?LeagueID=&PerMode=Totals&PlayerID=2544"
      );
      const json = await response.json();
      const data = json;
      console.log(data);
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlayerCareerStats();
  }, []);

  return (
    <SafeAreaView>
      <Text>Test</Text>
    </SafeAreaView>
  );
};

export default PlayerCareerStats;

const styles = StyleSheet.create({});

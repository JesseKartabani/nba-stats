import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Banner from "./components/Banner";
import LeagueLeaders from "./components/LeagueLeaders";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageBackground
        style={styles.backgroundImg}
        source={{ uri: "https://i.imgur.com/Fw7YF2Q.jpg" }}
      >
        <Banner />
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
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    height: "100%",
    width: "100%",
  },
});

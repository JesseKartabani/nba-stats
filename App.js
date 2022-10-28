import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import LeagueLeaderScreen from "./screens/LeagueLeaderScreen";
import TestScreen from "./screens/TestScreen";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="League Leaders"
            component={LeagueLeaderScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Test Screen"
            component={TestScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

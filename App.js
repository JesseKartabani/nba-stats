import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import LeagueLeaderScreen from "./screens/LeagueLeaderScreen";
import PlayerCareerStatsScreen from "./screens/PlayerCareerStatsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const Stack = createStackNavigator();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="League Leaders"
              component={LeagueLeaderScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Player Career Stats"
              component={PlayerCareerStatsScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

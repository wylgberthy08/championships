import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { CompetitionDetails } from "../screens/CompetitionDetails";
import { Home } from "../screens/Home";
import { Classification } from "../screens/Classification";

type RootStackParamList = {
  Home: undefined;
  TabRoutes: { id: number };
  Matches: { id: number };
  Classification: undefined;
  Chasers: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, "Matches">;

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CompetitionDetails"
        component={CompetitionDetails}
      />
        <Stack.Screen
        options={{ headerShown: false }}
        name="Classification"
        component={Classification}
      />
    </Stack.Navigator>
  );
}

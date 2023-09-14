import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./src/routes/app.routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent style="auto" />
      <StackRoutes />
    </NavigationContainer>
  );
}

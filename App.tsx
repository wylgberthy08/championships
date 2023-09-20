import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./src/routes/app.routes";
import { StatusBar } from "expo-status-bar";
import { SignIn } from "./src/screens/SignIn";
import { AuthRoutes } from "./src/routes/auth.routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent style="auto" />
      <AuthRoutes />
    </NavigationContainer>
  );
}

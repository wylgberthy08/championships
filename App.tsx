import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./src/routes/app.routes";
import { StatusBar } from "expo-status-bar";
import { SignIn } from "./src/screens/SignIn";
import { AuthRoutes } from "./src/routes/auth.routes";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/contexts/authContexts";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar translucent style="auto" />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

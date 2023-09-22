import React, { useContext } from "react";
import { StackRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "../contexts/authContexts";
import theme from "../global/styles/theme";

export function Routes() {
  const { signed, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background_secondary,
        }}
      >
        <ActivityIndicator size={50} color={theme.colors.shape_dark} />
      </View>
    );
  }

  return signed ? <StackRoutes /> : <AuthRoutes />;
}

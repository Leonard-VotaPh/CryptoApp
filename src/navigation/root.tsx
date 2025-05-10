import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useCallback } from "react";
import DetailView from "../screens/Detail";
import HomeView from "../screens/Home";
import { colors } from "../utils/colors";
import { inferRoute } from "../utils/navUtils";
import { RootStackParams, Routes } from "./RootStackParams";

const MainStack = createStackNavigator<RootStackParams>();

const AppStack = () => (
  <>
    {inferRoute(MainStack)(Routes.HOME, HomeView)}
    <MainStack.Screen
      name={Routes.DETAIL}
      component={DetailView}
      options={{
        headerShown: false,
      }}
    />
  </>
);

const AppNavigator = () => {
  const onGetStack = useCallback(() => {
    return AppStack();
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.textPrimary,
          cardStyle: { backgroundColor: colors.background },
        }}
      >
        {onGetStack()}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

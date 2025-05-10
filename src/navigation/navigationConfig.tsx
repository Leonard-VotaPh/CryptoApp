import { StackNavigationOptions } from "@react-navigation/stack";
import { Routes } from "./RootStackParams";

const showHeader = (headerShown: boolean) => ({ headerShown });

export const authStackNavConfig = {
  initialRouteName: Routes.HOME,
};

export const appScreensNavOptions: Record<string, StackNavigationOptions> = {
  [Routes.HOME]: showHeader(false),
};

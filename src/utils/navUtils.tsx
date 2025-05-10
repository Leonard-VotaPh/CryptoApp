import React from "react";
import { appScreensNavOptions } from "../navigation/navigationConfig";
import { Routes } from "../navigation/routes";

export function inferRoute(NavigationStructure: any) {
  return function screenComponent(screenName: Routes, component: any) {
    return (
      <NavigationStructure.Screen
        name={screenName}
        component={component}
        options={appScreensNavOptions[screenName]}
      />
    );
  };
}

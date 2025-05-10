import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CryptoProvider } from "./src/context/CryptoContext";
import AppNavigator from "./src/navigation/root";

export function App() {
  return (
    <SafeAreaProvider>
      <CryptoProvider>
        <AppNavigator />
      </CryptoProvider>
    </SafeAreaProvider>
  );
}

export default App;

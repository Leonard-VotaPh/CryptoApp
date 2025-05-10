// CustomHeader.tsx
import { colors } from "@/src/utils/colors";
import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import CustomSearchBar from "./searchBar";

interface CustomHeaderProps {
  onSearch: (text: string) => void;
}

const CustomHeader = ({ onSearch }: CustomHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>CryptoApp</Text>
        <Text style={styles.subtitle}>Mercado de Criptomonedas</Text>
      </View>
      <CustomSearchBar onChangeText={onSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "ios" ? 47 : StatusBar.currentHeight || 0,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerContent: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.accent,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});

export default CustomHeader;

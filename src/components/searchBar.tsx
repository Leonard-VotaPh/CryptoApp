import { Feather } from "@expo/vector-icons"; // Ícono de lupa
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../utils/colors";

const CustomSearchBar = ({
  placeholder = "Buscar...",
  onChangeText,
}: {
  placeholder?: string;
  onChangeText?: (text: string) => void;
}) => {
  const [searchText, setSearchText] = useState("");

  const handleTextChange = (text: string) => {
    setSearchText(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={20}
        color={colors.textSecondary}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChangeText={handleTextChange}
        placeholderTextColor={colors.textSecondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.backgroundAlt,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.textPrimary,
  },
});

export default CustomSearchBar;

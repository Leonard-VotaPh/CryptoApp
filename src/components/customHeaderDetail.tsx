import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { RootStackParams } from "../navigation/RootStackParams";
import { colors } from "../utils/colors";

interface CustomHeaderDetailProps {
  coinId: string;
  name: string;
  symbol: string;
}

const STATUSBAR_HEIGHT =
  Platform.OS === "ios" ? 47 : StatusBar.currentHeight || 0;

const CustomHeaderDetail = ({
  coinId,
  name,
  symbol,
}: CustomHeaderDetailProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={[styles.container, { paddingTop: STATUSBAR_HEIGHT + 16 }]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Image
          source={{
            uri: `https://www.coinlore.com/img/25x25/${coinId}.png`,
          }}
          style={styles.icon}
        />
        <Text style={styles.title}>
          {name} ({symbol})
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    marginRight: 16,
  },
  backText: {
    fontSize: 24,
    color: colors.textPrimary,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
});

export default CustomHeaderDetail;

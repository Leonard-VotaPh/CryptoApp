import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParams, Routes } from "../navigation/RootStackParams";
import { Coint } from "../types/coint";
import { colors } from "../utils/colors";
import {
  formatMarketCap,
  formatNumber,
  formatPercentage,
} from "../utils/formatUtils";

type CointComponentProps = {
  coint: Coint;
  onImageError?: () => void;
};

const CointComponent: React.FC<CointComponentProps> = ({
  coint,
  onImageError,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(Routes.DETAIL, { coinId: coint.id })}
    >
      <View style={styles.leftSection}>
        <Image
          source={{
            uri: `https://www.coinlore.com/img/25x25/${coint.nameid}.png`,
          }}
          style={styles.coinImage}
          testID="coin-image"
          onError={onImageError}
        />
        <View style={styles.coinDetails}>
          <Text style={styles.coinName}>{coint.name}</Text>
          <Text style={styles.coinSymbol}>{coint.symbol}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.price}>{formatNumber(coint.price_usd)}</Text>
        <View style={styles.statsContainer}>
          <Text
            style={[
              styles.percentage,
              {
                color:
                  Number(coint.percent_change_24h) >= 0
                    ? colors.success
                    : colors.error,
              },
            ]}
          >
            {formatPercentage(coint.percent_change_24h)}
          </Text>
          <Text style={styles.marketCap}>
            {formatMarketCap(coint.market_cap_usd)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rightSection: {
    alignItems: "flex-end",
    flex: 1,
  },
  coinImage: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
  coinDetails: {
    flexDirection: "column",
  },
  coinName: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 2,
  },
  coinSymbol: {
    fontSize: 14,
    color: colors.textSecondary,
    textTransform: "uppercase",
  },
  statsContainer: {
    marginTop: 4,
    alignItems: "flex-end",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  percentage: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
  },
  marketCap: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export default CointComponent;

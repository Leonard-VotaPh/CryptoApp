import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import CointComponent from "../../components/cointComponent";
import CustomHeader from "../../components/customHeader";
import { useCrypto } from "../../context/CryptoContext";
import { Coint } from "../../types/coint";
import { colors } from "../../utils/colors";
import { styles } from "./styles";

const HomeView = () => {
  const { coins, loading, error, searchQuery, setSearchQuery, fetchCoins } =
    useCrypto();

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  const filteredCoins = coins.filter(
    (coin: Coint) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.accent} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomHeader onSearch={setSearchQuery} />
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        data={filteredCoins}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CointComponent coint={item} />}
      />
    </View>
  );
};

export default HomeView;

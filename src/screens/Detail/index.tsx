import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import CustomHeaderDetail from "../../components/customHeaderDetail";
import { RootStackParams, Routes } from "../../navigation/RootStackParams";
import { getDetailCoint, getMarkets } from "../../services/DetailCointService";
import { CoinDetail, Market } from "../../types/coint";
import { colors } from "../../utils/colors";
import {
  formatMarketCap,
  formatNumber,
  formatPrice,
} from "../../utils/formatUtils";
import { styles } from "./styles";

type DetailRouteProp = RouteProp<RootStackParams, typeof Routes.DETAIL>;

const DetailView = () => {
  const route = useRoute<DetailRouteProp>();
  const { coinId } = route.params;
  const [coinDetail, setCoinDetail] = useState<CoinDetail | null>(null);
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [detailResponse, marketsResponse] = await Promise.all([
          getDetailCoint(coinId),
          getMarkets(coinId),
        ]);

        if (detailResponse.success && marketsResponse.success) {
          setCoinDetail(detailResponse.data[0]);
          setMarkets(marketsResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [coinId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={styles.loadingIndicator.color} />
      </View>
    );
  }

  if (!coinDetail) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          No se pudo cargar la información de la criptomoneda
        </Text>
      </View>
    );
  }

  const sortedMarkets = [...markets].sort((a, b) => b.price_usd - a.price_usd);
  const topMarkets = sortedMarkets.slice(0, 5);

  const chartData = {
    labels: topMarkets.map((m) => m.name),
    datasets: [
      {
        data: topMarkets.map((m) => Number(m.price_usd)),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <CustomHeaderDetail
        coinId={coinDetail.nameid}
        name={coinDetail.name}
        symbol={coinDetail.symbol}
      />
      <ScrollView>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Precio Actual</Text>
          <Text style={styles.priceValue}>
            {formatNumber(coinDetail.price_usd)}
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Market Cap</Text>
            <Text style={styles.statValue}>
              {formatMarketCap(coinDetail.market_cap_usd)}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Volumen 24h</Text>
            <Text style={styles.statValue}>
              {formatMarketCap(coinDetail.volume24)}
            </Text>
          </View>
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Top 5 Exchanges por Precio</Text>
          <LineChart
            data={chartData}
            width={Dimensions.get("window").width - 64}
            height={220}
            chartConfig={{
              backgroundColor: colors.backgroundAlt,
              backgroundGradientFrom: colors.backgroundAlt,
              backgroundGradientTo: colors.backgroundAlt,
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: colors.accent,
              },
              formatYLabel: (value) => formatPrice(value),
            }}
            bezier
            style={styles.chart}
          />
          <View style={styles.marketList}>
            {topMarkets.map((market, index) => (
              <View key={index} style={styles.marketItem}>
                <Text style={styles.marketName}>{market.name}</Text>
                <Text style={styles.marketPrice}>
                  {formatPrice(market.price_usd)}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailView;

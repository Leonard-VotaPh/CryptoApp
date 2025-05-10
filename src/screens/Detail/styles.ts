import { Platform, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const STATUSBAR_HEIGHT =
  Platform.OS === "ios" ? 47 : StatusBar.currentHeight || 0;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  loadingIndicator: {
    color: colors.accent,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 20,
  },
  errorText: {
    color: colors.error,
    fontSize: 16,
    textAlign: "center",
  },
  priceContainer: {
    padding: 20,
    backgroundColor: colors.backgroundAlt,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  priceLabel: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  priceValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  statsContainer: {
    padding: 16,
    backgroundColor: colors.backgroundAlt,
    margin: 16,
    borderRadius: 12,
  },
  statItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  statLabel: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  chartContainer: {
    padding: 16,
    backgroundColor: colors.backgroundAlt,
    margin: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  marketList: {
    marginTop: 8,
  },
  marketItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  marketName: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  marketPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
  },
});

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Coint } from "../types/coint";

const CACHE_KEYS = {
  COINS: "cached_coins",
  LAST_UPDATE: "last_update",
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

export const cacheCoins = async (coins: Coint[]) => {
  try {
    await AsyncStorage.setItem(CACHE_KEYS.COINS, JSON.stringify(coins));
    await AsyncStorage.setItem(CACHE_KEYS.LAST_UPDATE, Date.now().toString());
  } catch (error) {
    console.error("Error al guardar en caché:", error);
  }
};

export const getCachedCoins = async (): Promise<Coint[] | null> => {
  try {
    const [coinsData, lastUpdateStr] = await Promise.all([
      AsyncStorage.getItem(CACHE_KEYS.COINS),
      AsyncStorage.getItem(CACHE_KEYS.LAST_UPDATE),
    ]);

    if (!coinsData || !lastUpdateStr) return null;

    const lastUpdate = parseInt(lastUpdateStr);
    const now = Date.now();

    if (now - lastUpdate > CACHE_DURATION) {
      return null;
    }

    return JSON.parse(coinsData);
  } catch (error) {
    console.error("Error al obtener datos de caché:", error);
    return null;
  }
};

export const clearCache = async () => {
  try {
    await Promise.all([
      AsyncStorage.removeItem(CACHE_KEYS.COINS),
      AsyncStorage.removeItem(CACHE_KEYS.LAST_UPDATE),
    ]);
  } catch (error) {
    console.error("Error al limpiar caché:", error);
  }
};

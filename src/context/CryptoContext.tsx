import React, { createContext, useCallback, useContext, useState } from 'react';
import { getCoints } from '../services/AllCointsService';
import { Coint } from '../types/coint';

interface CryptoContextType {
  coins: Coint[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchCoins: () => Promise<void>;
}

const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

export const CryptoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [coins, setCoins] = useState<Coint[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchCoins = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getCoints();
      setCoins(response.data);
      setError(null);
    } catch (err) {
      setError('Error al cargar las criptomonedas');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <CryptoContext.Provider value={{ coins, loading, error, searchQuery, setSearchQuery, fetchCoins }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = () => {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error('useCrypto debe ser usado dentro de un CryptoProvider');
  }
  return context;
}; 
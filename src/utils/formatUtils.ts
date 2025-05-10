export const formatNumber = (value: string | number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
};

export const formatPercentage = (value: string | number) => {
  const num = Number(value);
  const sign = num >= 0 ? "▲" : "▼";
  return `${sign} ${Math.abs(num).toFixed(2)}%`;
};

export const formatMarketCap = (value: string | number) => {
  const num = Number(value);
  if (num >= 1e12) {
    return `$ ${(num / 1e12).toFixed(2)}T`;
  } else if (num >= 1e9) {
    return `$ ${(num / 1e9).toFixed(2)}B`;
  } else if (num >= 1e6) {
    return `$ ${(num / 1e6).toFixed(2)}M`;
  } else {
    return formatNumber(num);
  }
};

export const formatPrice = (value: string | number) => {
  const num = Number(value);
  if (num >= 1000) {
    return `$${(num / 1000).toFixed(1)}K`;
  }
  return formatNumber(num);
};

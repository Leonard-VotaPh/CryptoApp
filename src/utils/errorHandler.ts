export class CryptoError extends Error {
  constructor(message: string, public code: string, public status?: number) {
    super(message);
    this.name = "CryptoError";
  }
}

export const handleApiError = (error: unknown): CryptoError => {
  if (error instanceof CryptoError) {
    return error;
  }

  if (error instanceof Error) {
    return new CryptoError(error.message, "UNKNOWN_ERROR", 500);
  }

  return new CryptoError("Error desconocido", "UNKNOWN_ERROR", 500);
};

export const ErrorCodes = {
  NETWORK_ERROR: "NETWORK_ERROR",
  API_ERROR: "API_ERROR",
  CACHE_ERROR: "CACHE_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

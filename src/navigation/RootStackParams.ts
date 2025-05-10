
export type RootStackParams = {
  [Routes.HOME]: undefined;
  [Routes.DETAIL]: { coinId: string };
};

export enum Routes {
  HOME = "HOME",
  DETAIL = "DETAIL"
} 

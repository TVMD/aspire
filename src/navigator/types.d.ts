export type ScreenList =
  | "Home"
  | "DebitCard"
  | "Credit"
  | "Payment"
  | "Profile"

export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  Credit: undefined;
  Payment: undefined;
  Profile: undefined;
  DebitCard: undefined; l
};

export type DebitCardStackType = {
  DebitCard: undefined
  SpendLimit: undefined
};

export type HomeTabParams = {
  Home: undefined;
  "Debit Card": undefined;
  Payment: undefined;
  Credit: undefined;
  Profile: undefined;
};

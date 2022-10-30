import { DebitCard } from "../../models/debitcard";

export type DebitCardContext = {
  gettingDebitCard: boolean;
  debitCard: DebitCard;
  getDebitCard: () => Promise<undefined>;
  setSpendLimit: (isLimit: boolean, limit?: number) => Promise<boolean>;
};

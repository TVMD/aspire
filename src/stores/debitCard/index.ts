import { Alert } from "react-native";
import { SetState, GetState } from "zustand";
import { DebitCard } from "../../models/debitcard";
import { API } from "../../services/debitCardServices";
import { AppState } from "../types";
import { DebitCardContext } from "./types";

const createDebitCardContext = (set: SetState<AppState>, get: GetState<AppState>) =>
({
  gettingDebitCard: false,

  debitCard: {} as DebitCard,

  getDebitCard: async () => {
    set({ gettingDebitCard: true });
    const getter = get();
    const { data, error } = await API.getDebitCard();
    if (!error) {
      set({ debitCard: data });
    }
    set({ gettingDebitCard: false });
  },

  setSpendLimit: async (isLimit: boolean, limit: number) => {
    const getter = get();
    const body = {
      isLimit,
      limit
    };

    const { message, error } = await API.setLimit(
      body
    );
    if (error) {
      Alert.alert('Failed')
      return false;
    } else {
      Alert.alert('Success')
      getter.getDebitCard();
      return true;
    }
  },
} as DebitCardContext);

export default createDebitCardContext;

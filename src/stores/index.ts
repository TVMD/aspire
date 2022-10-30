import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { SetState, GetState } from 'zustand';
import { persist } from 'zustand/middleware';

import { AppState } from './types';

import createDebitCardContext from './debitCard';
import { DebitCardContext } from './debitCard/types';


export const appStore = (set: SetState<AppState>, get: GetState<AppState>) => ({
  ...createDebitCardContext(set, get),
}) as AppState

const useStore = create(
  persist(appStore, {
    name: 'aspire',
    getStorage: () => AsyncStorage,
  })
);


export default useStore;

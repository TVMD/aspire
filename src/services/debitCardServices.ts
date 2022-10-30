import { DebitCard } from "../models/debitcard";

const data = {
  status: 'active',
  holderName: 'Mark Henry',
  expireDate: '12/20',
  cvv: '877',
  cardNumber: '5647341123132020',
  balance: 3000,
  currentSpend: 200,
  limit: 500,
  isLimit: false
} as DebitCard

class DebitCardServices {
  private baseUrl = "/debitcard";

  public async getDebitCard() {
    try {
      return { data }
    } catch (error) {
      return { data: undefined, error: error };
    }
  }

  public async setLimit({ isLimit, limit }: { isLimit: boolean, limit?: number }) {
    try {
      data.limit = limit == undefined ? data.limit : limit
      data.isLimit = isLimit
      return { message: 'done' }
    } catch (error) {
      return { message: 'error', error: error };
    }
  }
}

export const API = new DebitCardServices();

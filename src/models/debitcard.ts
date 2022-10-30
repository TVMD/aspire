
export interface DebitCard {
  status: 'active' | 'deactive'
  holderName: string
  expireDate: string
  cvv: string
  cardNumber: string
  balance: number
  currentSpend: number
  limit: number
  isLimit: boolean
}


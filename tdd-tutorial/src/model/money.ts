export default class Money {
  public readonly amount: number
  public readonly currency: string

  public constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  public times(multiplier: number) {

  }
}
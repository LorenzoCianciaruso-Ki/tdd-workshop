export default class Money {
    public readonly from: string
    public readonly to: string
    public readonly exchange: number
  
    public constructor(from: string, to: string, exchange: number) {
      this.from = from
      this.to = to
      this.exchange = exchange
    }
  }
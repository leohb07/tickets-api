export class Ticket {
  constructor(
    public readonly id: number,
    public readonly description: string,
    public readonly status: string,
    public readonly priority: number,
  ) { }
}


import { Ticket } from "./ticket";

export abstract class TicketRepository {
  abstract create(ticket: Ticket): Promise<Ticket>;

  abstract findAll(): Promise<Ticket[]>;

  abstract findByStatus(status: string): Promise<Ticket>;
}


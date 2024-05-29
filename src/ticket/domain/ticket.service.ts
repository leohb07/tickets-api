import { Ticket } from "src/ticket/domain/ticket";
import { Inject, Injectable } from "@nestjs/common";
import { TicketRepository } from "./ticket.repository";

@Injectable()
export class TicketService {
  constructor(
    @Inject(TicketRepository)
    private readonly ticketRepository: TicketRepository,
  ) { }

  async create(ticket: Ticket): Promise<Ticket> {
    return await this.ticketRepository.create(ticket);
  }

  async findAll(): Promise<Ticket[]> {
    return await this.ticketRepository.findAll();
  }

  async findByStatus(status: string): Promise<Ticket> {
    return await this.ticketRepository.findByStatus(status);
  }
}

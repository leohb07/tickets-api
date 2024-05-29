import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ticket } from "src/ticket/domain/ticket";
import { TicketRepository } from "src/ticket/domain/ticket.repository";
import { TicketEntity } from "src/ticket/infrastructure/database/entities/ticket.entity";
import { Repository } from "typeorm";

@Injectable()
export class TicketDBRepository implements TicketRepository {
  constructor(
    @InjectRepository(TicketEntity)
    private readonly ticketRepository: Repository<TicketEntity>,
  ) { }

  async create(ticket: Ticket): Promise<Ticket> {
    const response = this.ticketRepository.create({
      priority: ticket.priority,
      id: ticket.id,
      status: ticket.status,
      description: ticket.description,
    })
    return await this.ticketRepository.save(response)
  }

  async findAll(): Promise<Ticket[]> {
    return await this.ticketRepository.find();
  };

  async findByStatus(status: string): Promise<Ticket> {
    return await this.ticketRepository.findOne({
      where: {
        status,
      }
    })
  }
}


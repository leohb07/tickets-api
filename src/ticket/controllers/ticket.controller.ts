import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { TicketService } from "../domain/ticket.service";
import { Ticket } from "../domain/ticket";
import { TicketCommand } from "./ticket.command";

@Controller({
  path: 'tickets',
  version: ['1'],
})
export class TicketController {
  constructor(private ticketService: TicketService) { }

  @Post()
  async create(@Body() ticketCommand: TicketCommand): Promise<Ticket> {
    return this.ticketService.create(ticketCommand);
  }

  @Get()
  async findAll(): Promise<Ticket[]> {
    return this.ticketService.findAll();
  }

  @Get('/status')
  async findByStatus(@Query('status') status: string): Promise<Ticket> {
    console.log("to do print ticketId", status)
    return this.ticketService.findByStatus(status)
  }
}

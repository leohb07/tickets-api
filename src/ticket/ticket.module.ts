import { Module } from "@nestjs/common";
import { TicketController } from "./controllers/ticket.controller";
import { TicketService } from "./domain/ticket.service";
import { TicketRepository } from "./domain/ticket.repository";
import { TicketDBRepository } from "./adapters/ticket/typeorm-ticket.repository";
import { TicketEntity } from "./infrastructure/database/entities/ticket.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([TicketEntity])
  ],
  controllers: [TicketController],
  providers: [
    TicketService,
    {
      provide: TicketRepository,
      useClass: TicketDBRepository,
    },
  ],
})
export class TicketModule { }

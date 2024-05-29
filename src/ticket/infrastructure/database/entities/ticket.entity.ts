import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tickets')
export class TicketEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string

  @Column()
  status: string;

  @Column({ default: 0 })
  priority: number;
}

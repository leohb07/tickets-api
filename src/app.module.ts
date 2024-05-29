import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TicketModule } from './ticket/ticket.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketEntity } from './ticket/infrastructure/database/entities/ticket.entity';

@Module({
  imports: [
    TicketModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [TicketEntity],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

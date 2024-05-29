import { IsNotEmpty } from "class-validator";

export class TicketCommand {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  priority: number;
}

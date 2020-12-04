import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Entry {
  @ApiProperty()
  @IsString()
  message: string;
}

export class Entries {
  @ApiProperty({ type: [Entry] })
  entries: Entry[];
}

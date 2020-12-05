import { Injectable } from '@nestjs/common';
import { Entries, Entry } from '@nx-monorepo/common';

@Injectable()
export class AppService {
  data: Entries = {entries: [{message: 'test'}]};

  getData() {
    return this.data;
  }

  addEntry(entry: Entry) {
    this.data.entries.push(entry);
  }
}

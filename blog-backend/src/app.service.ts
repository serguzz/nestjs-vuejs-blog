import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return `Hello World! The Server is working on port ${process.env.PORT}!`;
  }
}

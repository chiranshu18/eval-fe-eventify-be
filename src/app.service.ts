import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  health(): string {
    this.logger.log('Server is Up!!!!');
    return 'Server is Up!!!!';
  }
}

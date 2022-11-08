import { Injectable } from '@nestjs/common';

/**
 * App Service
 */
@Injectable()
export class AppService {
  /**
   * Get Hello
   * @returns {string} "Hello World!"
   */
  getHello(): string {
    return 'Hello World!';
  }
  /**
   * Get Goodbye
   * @returns {string} "Goodby World!"
   */
  getGoodbye(): string {
    return 'Goodbye World!';
  }
}

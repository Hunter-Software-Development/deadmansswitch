import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * App Controller
 *
 * Currently not doing anything - if we end up adding some rest instead of graphql we can leverage this
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Get Hello
   *
   * Currently just returns "Hello World!"
   *
   * @returns {string}
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Get Hello
   *
   * Currently just returns "Goodbye World!"
   *
   * @returns {string}
   */
  @Get('/bye')
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }
}

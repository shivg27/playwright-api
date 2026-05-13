import { APIRequestContext } from '@playwright/test';
import { Logger } from '../../utils/logger.js';

export class ApiRequest {
  constructor(private requestContext: APIRequestContext) {}

  async request(method: string, url: string, options?: any) {
    Logger.log(`${method} Request: ${url}`);

    const response = await this.requestContext.fetch(url, {
      method,
      ...options
    });

    await this.handleResponse(response);

    return response;
  }

  private async handleResponse(response: any) {
    Logger.log(`Status: ${response.status()}`);

    try {
      const body = await response.text();
      Logger.log(`Response Body: ${body}`);
    } catch (err) {
      Logger.log(`No body or parsing error`);
    }
  }
}
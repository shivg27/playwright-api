import { request, APIRequestContext } from '@playwright/test';
import { Logger } from '../../utils/logger.js';
import { config } from '../../utils/config.js';
import { ApiRequest } from '../../core/request/apiRequest.js';

export class BaseClient {
  protected requestContext!: APIRequestContext;
  protected apiRequest!: ApiRequest;

  async init(headers?: any) {

    Logger.log(`Base URL: ${config.baseURL}`);
    Logger.log(`API Key: ${config.apiKey}`);

    this.requestContext = await request.newContext({
      baseURL: config.baseURL,
      extraHTTPHeaders: {
        ...headers,
        'x-api-key': config.apiKey
      },
    });
    this.apiRequest = new ApiRequest(this.requestContext);
  }
}
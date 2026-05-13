import { ZodSchema } from 'zod';

export class ResponseValidator {

  static async validate(response: any, expectedStatus: number, schema?: ZodSchema) {
    const body = await response.json();

    if (response.status() !== expectedStatus) {
      throw new Error(
        `❌ Expected ${expectedStatus}, got ${response.status()}
         Body: ${JSON.stringify(body, null, 2)}`
      );
    }

     if (schema) {
      schema.parse(body); // Zod validation
    }

    return body;
  }
}
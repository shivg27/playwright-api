import { faker } from '@faker-js/faker';
import { UserPayload } from '../models/userModel.js';

export function createUserPayload(
  overrides?: Partial<UserPayload>
): UserPayload {

  const payload: UserPayload = {
    name: faker.person.firstName(),
    job: faker.person.jobTitle(),
  };

  return {
    ...payload,
    ...overrides
  };
}
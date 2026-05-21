import { test, expect } from '@playwright/test';
import { UserService } from '../../api/services/userService.js';
import { config } from '../../utils/config.js';
// import userData from '../../fixtures/userData.json' with { type: 'json' };
import { ResponseValidator } from '../../core/response/responseValidator.js';
import { getUserSchema, createUserSchema } from '../../api/models/userSchema.js';
import { createUserPayload } from '../../api/factories/userFactory.js';

test.describe('User API Tests', () => {

    test('GET user details', async () => {
        const userService = new UserService();
        console.log("Base URLs:", config.baseURL);
        await userService.init();
        console.log("Initialized with:", config.baseURL);
        const response = await userService.getUser('2');

        const body = await ResponseValidator.validate(response, 200, getUserSchema);
        expect(body.data.id).toBe(2);
        console.log("User Details:", body.data);
    });

    test('CREATE user', async () => {
        const userService = new UserService();
        console.log("Base URL:", config.baseURL);
        await userService.init();
        const userData = createUserPayload();
        const response = await userService.createUser(userData);

        const body = await ResponseValidator.validate(response, 201, createUserSchema);
        expect(body.name).toBe(userData.name);
        
    });

});

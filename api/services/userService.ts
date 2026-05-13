import { BaseClient } from '../clients/baseClient.js';

export class UserService extends BaseClient {

    async getUser(userId: string) {
        return await this.apiRequest.request('GET', `/api/users/${userId}`);
    }

    async createUser(payload: any) {
        return await this.apiRequest.request('POST', '/api/users', { data: payload });
    }
}
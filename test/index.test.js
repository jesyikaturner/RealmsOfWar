import request from 'supertest';
import app from '../index.js';

describe('GET /', () => {
    it('return response', () => {
        return request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
    });
});


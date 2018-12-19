import * as request from 'supertest'
import { server } from '..'
const api = request(server)
describe('Server', () => {
  describe('GET /', () => {
    it('should return object with name property', done => {
      api
        .get('/')
        .expect(200)
        .expect(res => {
          expect(res.body).toHaveProperty('name', 'Joseph')
        })
        .end(done)
    })
  })
  describe('GET /users', () => {
    it('should return my user object', done => {
      api
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toContainEqual({ name: 'Joseph', age: 39 })
        })
        .end(done)
    })
  })
  afterAll(() => {
    server.close()
  })
})

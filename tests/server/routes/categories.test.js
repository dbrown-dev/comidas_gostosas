const request = require('supertest')

const server = require('../../../server/server')

jest.mock('../../../server/db/db')


test('GET / returns all the cuisine categories', () => {
  return request(server)
    .get('/api/categories/')
    .then(res => {
      expect(res.body).toHaveLength(6)
      expect(res.status).toBe(200)
    })
})

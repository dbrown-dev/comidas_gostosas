const request = require('supertest')

const server = require('../../../server/server')

jest.mock('../../../server/db/db')

test('GET / returns all the seasons', () => {
  return request(server)
    .get('/api/seasons/')
    .then(res => {
      expect(res.body).toHaveLength(4)
    })
})

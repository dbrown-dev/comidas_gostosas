const request = require('supertest')

const server = require('../../../server/server')

jest.mock('../../../server/db/db')

test('GET / returns all the cooking times', () => {
  return request(server)
    .get('/api/cookTimes/')
    .then(res => {
      expect(res.body).toHaveLength(3)
    })
})

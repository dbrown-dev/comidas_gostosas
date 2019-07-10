const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getSeasons returns all seasons', () => {
  return db.getSeasons(testDb)
    .then(seasons => {
      expect(seasons).toHaveLength(4)
    })
})

test('getCategories returns all Categories', () => {
  return db.getCategories(testDb)
    .then(seasons => {
      expect(seasons).toHaveLength(6)
    })
})

test('getCookTimeOptions returns all cooking time options', () => {
  return db.getCookTimeOptions(testDb)
    .then(seasons => {
      expect(seasons).toHaveLength(3)
    })
})
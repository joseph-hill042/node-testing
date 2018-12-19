import { add, square, setName, asyncAdd } from '../utils/utils'
import * as expect from 'expect'

describe('Utils', () => {
  it('should add two numbers', () => {
    const result = add(5, 7)
    expect(result).toBe(12)
    expect(typeof result).toBe('number')
  })

  it('should async add two numbers', done => {
    asyncAdd(4, 3, sum => {
      expect(sum).toBe(7)
      done()
    })
  })

  it('should square a number', () => {
    const result = square(5)
    expect(result).toBe(25)
  })

  it('should set firstName and lastName', () => {
    const user = setName({ firstName: '', lastName: '' }, 'Joseph Hill')
    expect(typeof user).toBe('object')
    expect(user).toMatchObject({ firstName: 'Joseph', lastName: 'Hill' })
  })
})

import { handleSignup } from '../spies/app'
jest.mock('../spies/db')
import { saveUser } from '../spies/db'

describe('App', () => {
  it('should call the mock correctly', function() {
    const mockFn = jest.fn().mockName('mockedFunction')
    mockFn()
    expect(mockFn).toHaveBeenCalled()
  })
  it('should call saveUser with user object', function() {
    const email = 'joseph.hill@outlook.com'
    const password = '1234abc'

    handleSignup(email, password)
    expect(saveUser).toHaveBeenCalledWith({ email, password })
  })
})

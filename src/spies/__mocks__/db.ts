export const saveUser = jest.fn().mockImplementation(user => {
  console.info('Saving user', user)
})

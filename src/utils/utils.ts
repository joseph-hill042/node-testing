export const add = (a, b) => a + b

export const asyncAdd = (a: number, b: number, callback: any) => {
  setTimeout(() => {
    callback(a + b)
  })
}

export const square = x => x * x

interface User {
  firstName: string
  lastName: string
}

export const setName = (user: User, fullName: string): User => {
  const names: string[] = fullName.split(' ')
  user.firstName = names[0]
  user.lastName = names[1]
  return user
}

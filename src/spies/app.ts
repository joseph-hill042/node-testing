import { saveUser } from './db'

export const handleSignup = (email, password) => {
  saveUser({ email, password })
}

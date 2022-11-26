import usersRepositories from '../repositories/usersRepositories.js'

class UsersService {
  constructor() {}

  addUser(user) {
    usersRepositories.addUsers(user)
  }

  getUserByUsername(username) {
    return usersRepositories.getUserByUsername(username)
  }
}

const usersService = new UsersService()

export default usersService

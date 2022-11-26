class UsersRepositories {
  constructor() {
    this.users = []
  }

  addUsers(user) {
    this.users.push(user)
  }

  getAllUsers() {
    return this.users
  }

  getUserByUsername(username) {
    const user = this.users.find(user => user.username === username)

    return user
  }
}

const usersRepositories = new UsersRepositories()

export default usersRepositories

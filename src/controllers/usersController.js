import usersService from '../services/usersService.js'

class UsersController {
  constructor() {}

  addUser(req, res) {
    const { username, avatar } = req.body

    usersService.addUser({ username, avatar })

    res.status(200).send('OK deu tudo certo')
  }
}

const usersController = new UsersController()

export default usersController

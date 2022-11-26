class UsersValidate {
  constructor() {}

  signUp(req, res, next) {
    const { username, avatar } = req.body

    if (!username || !avatar) {
      res.status(400).send('Todos os campos são obrigatórios!')
      return
    }

    next()
  }
}

const usersValidate = new UsersValidate()

export default usersValidate

export default class Usuarios {
  constructor(app) {
    this.app = app
    this.usuarios = []
  }

  signUp() {
    this.app.post('/sign-up', (req, res) => {
      const { username, avatar } = req.body

      if (!username || !avatar) {
        res.status(400).send('Todos os campos são obrigatórios!')
        return
      }

      this.usuarios.push({ username, avatar })

      res.status(200).send('OK deu tudo certo')
    })
  }
}

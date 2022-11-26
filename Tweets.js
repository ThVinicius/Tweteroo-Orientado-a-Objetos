export default class Tweets {
  usuarios

  constructor(app, usuarios) {
    this.app = app
    this.usuarios = usuarios
    this.tweets = []
  }

  addTweets() {
    this.app.post('/tweets', (req, res) => {
      const { tweet, username } = req.body

      if (!username || !tweet) {
        return res.status(400).send('Todos os campos são obrigatórios!')
      }

      const { avatar } = this.usuarios.find(user => user.username === username)

      this.tweets.push({ username, tweet, avatar })

      res.status(201).send('OK, seu tweet foi criado')
    })
  }

  getTweetsByUser() {
    this.app.get('/tweets/:username', (req, res) => {
      const { username } = req.params

      const tweetsDoUsuario = this.tweets.filter(t => t.username === username)

      res.status(200).send(tweetsDoUsuario)
    })
  }

  getTweets() {
    this.app.get('/tweets', (req, res) => {
      const { page } = req.query

      if (page && page < 1) {
        res.status(400).send('Informe uma página válida!')
        return
      }
      const limite = 10
      const start = (page - 1) * limite
      const end = page * limite

      if (this.tweets.length <= 10) {
        return res.send(reverseTweets(this.tweets))
      }

      res.status(200).send(reverseTweets(this.tweets).slice(start, end))
    })
  }
}

function reverseTweets(tweets) {
  return [...tweets].reverse()
}

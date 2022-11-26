class TweetsValidate {
  constructor() {}

  addTweet(req, res, next) {
    const { tweet, username } = req.body

    if (!username || !tweet) {
      return res.status(400).send('Todos os campos são obrigatórios!')
    }

    next()
  }

  getTweets(req, res, next) {
    const { page } = req.query

    if (page && page < 1) {
      return res.status(400).send('Informe uma página válida!')
    }

    next()
  }
}

const tweetsValidate = new TweetsValidate()

export default tweetsValidate

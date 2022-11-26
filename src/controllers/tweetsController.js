import tweetsService from '../services/tweetsService.js'
import usersService from '../services/usersService.js'

class TweetsController {
  constructor() {}

  addTweet(req, res) {
    const { tweet, username } = req.body

    const { avatar } = usersService.getUserByUsername(username)

    if (!avatar) return res.status(404).send('Usuário não encontrado')

    tweetsService.addTweet({ tweet, username, avatar })

    res.status(201).send('OK, seu tweet foi criado')
  }

  getTweetsByUser(req, res) {
    const { username } = req.params

    const userTweets = tweetsService.getTweetsByUser(username)

    res.status(200).send(userTweets)
  }

  getTweets(req, res) {
    const { page } = req.query

    const tweets = tweetsService.getTweets(page)

    res.status(200).send(tweets)
  }
}

const tweetsController = new TweetsController()

export default tweetsController

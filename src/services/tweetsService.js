import tweetsRepositories from '../repositories/tweetsRepositories.js'

class TweetsService {
  constructor() {}

  addTweet(tweet) {
    tweetsRepositories.addTweet(tweet)
  }

  getTweetsByUser(user) {
    return tweetsRepositories.getTweetsByUser(user)
  }

  getTweets(page) {
    const limite = 10
    const start = (page - 1) * limite
    const end = page * limite

    const tweets = tweetsRepositories.getAllTweets().reverse()

    if (tweets.length <= 10) return tweets

    return tweets.slice(start, end)
  }
}

const tweetsService = new TweetsService()

export default tweetsService

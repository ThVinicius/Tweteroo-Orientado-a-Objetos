export default class tweetsRepositories {
  constructor() {
    this.tweets = []
  }

  addTweet(tweet) {
    this.tweets.push(tweet)
  }

  getTweetsByUser() {
    const tweetsUser = this.tweets.filter(tweet => tweet.username === username)

    return tweetsUser
  }

  getAllTweets() {
    return this.tweets
  }
}

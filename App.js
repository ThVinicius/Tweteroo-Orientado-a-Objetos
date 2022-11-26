import chalk from 'chalk'
import cors from 'cors'
import express, { json } from 'express'
import Usuarios from './Usuarios.js'
import Tweets from './Tweets.js'

export default class App {
  constructor() {
    this.app = express()
    this.usuarios = new Usuarios(this.app)
    this.tweets = new Tweets(this.app, this.usuarios.usuarios)
  }

  config() {
    this.app.use(cors())
    this.app.use(json())
  }

  init() {
    this.app.listen(5001, () => {
      console.log(chalk.bold.blue('Servidor funfando de boas!!!'))
    })
  }

  userRoutes() {
    this.usuarios.signUp()
  }

  tweetsRoutes() {
    this.tweets.addTweets()
    this.tweets.getTweetsByUser()
    this.tweets.getTweets()
  }
}

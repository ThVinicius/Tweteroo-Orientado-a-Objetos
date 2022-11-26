import chalk from 'chalk'
import cors from 'cors'
import express, { json } from 'express'
import routes from './routes/index.js'

class App {
  constructor() {
    this.app = express()
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

  routes() {
    this.app.use(routes)
  }
}

const app = new App()

app.config()
app.routes()
app.init()

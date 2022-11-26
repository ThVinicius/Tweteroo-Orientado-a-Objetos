import App from './App'

const app = new App()

app.config()

app.userRoutes()
app.tweetsRoutes()

app.init()

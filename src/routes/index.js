import { Router } from 'express'
import usersRoutes from './usersRoute.js'
import tweetsRoutes from './tweetsRoute.js'

const route = Router()

route.use(usersRoutes)
route.use(tweetsRoutes)

export default route

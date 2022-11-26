import { Router } from 'express'
import usersValidate from '../middlewares/usersValidate.js'
import usersController from '../controllers/usersController.js'

const router = Router()

router.post('/sign-up', usersValidate.signUp, usersController.addUser)

export default router

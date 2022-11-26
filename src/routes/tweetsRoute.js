import { Router } from 'express'
import tweetsValidate from '../middlewares/tweetsValidate.js'
import tweetsController from '../controllers/tweetsController.js'

const router = Router()

router.post('/tweets', tweetsValidate.addTweet, tweetsController.addTweet)

router.get('/tweets/:username', tweetsController.getTweetsByUser)

router.get('/tweets', tweetsValidate.getTweets, tweetsController.getTweets)

export default router

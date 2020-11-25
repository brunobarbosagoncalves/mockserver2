import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  console.log('aahuhu')
  return res.status(200).send(`root`)
})

export default router

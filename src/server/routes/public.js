import express from 'express'
import fs from 'fs'
import path from 'path'

import { getFilesAndPath } from '../../services/extractDataFromOldMockServer'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    fs.rmdirSync('../backend_template/src/mockfiles/result')
    console.log('rm success')
  } catch (error) {}

  try {
    fs.mkdirSync('../backend_template/src/mockfiles/result')
    console.log('mk success')
  } catch (error) {}

  const files = getFilesAndPath(
    path.resolve(__dirname, '..', '..', 'mockfiles', 'mappings'),
    []
  )

  console.log('path.basename')
  // console.log('FILES::', files)

  files.forEach((v, i) => {
    const fileJson = fs.readFile(v, (err, data) => {
      console.log(':::FILE:', v)
      console.log(JSON.parse(data.toString()))
    })
    console.log('==>', fileJson)
  })

  return res.status(200).send(`Running mockserver on port ${process.env.PORT}`)
})

export default router

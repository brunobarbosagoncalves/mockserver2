//load env
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: path.resolve(`.env.${process.env.NODE_ENV.trim()}`) })

import express from 'express'

//midllewares
import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import rid from 'connect-rid'
import cors from 'cors'
import helmet from 'helmet'

//local
import routes from '~/server/routes'
import checkToken from '~/server/middlewares/checkToken'

class Server {
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
    this.start()
  }

  middlewares() {
    this.server.use(cors({ origin: '*' }))
    this.server.use(rid({ headerName: 'x-req-id' }))
    this.server.set('trust proxy')
    // this.server.use(helmet())
    this.server.use(bodyParser.json())
    this.server.use(bodyParser.urlencoded({ extended: false }))
    this.server.use(compression())

    if (process.env.NODE_ENV === 'development') {
      this.server.use(morgan(':status :method :url :total-time[digits] ms '))
    }
  }

  async routes() {
    this.server.use('/', routes.publicRoute)

    this.server.use('/protected', /*checkToken,*/ routes.publicRoute)

    this.server.use('*', (_, res) =>
      res.status(404).send({ message: 'Page not found' })
    )
  }

  start() {
    this.server.listen(process.env.port, () => {
      console.log(
        `Server run on port ${process.env.port}, mode ${process.env.NODE_ENV}`
      )
    })
  }
}

export default new Server()

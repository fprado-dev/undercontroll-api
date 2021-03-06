/**
 * Configuration of the server middlewares.
 */

import bodyParser from 'body-parser'
import compression from 'compression'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

export default app => {
  app.use(compression())
  app.use(morgan('dev'))
  app.use(bodyParser.json({ limit: '150mb' }))
  app.use(bodyParser.urlencoded({ limit: '150mb', extended: true }))
  app.use(helmet())
  app.use(cors())
}

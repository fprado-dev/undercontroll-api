import express from 'express'
import HTTPStatus from 'http-status'

// Middlewares
import APIError from '../services/error'
import logErrorService from '../services/log'

// Controllers
import UserRoutes from '../modules/User/routes'

const routes = express.Router()
routes.use('/user', UserRoutes)

routes.all('*', (req, res, next) =>
  next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true))
)

routes.use(logErrorService)

export default routes

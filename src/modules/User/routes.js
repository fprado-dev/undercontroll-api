/**
 * User Routes
 */

import express from 'express'

import * as UsersController from './controller'

const routes = express.Router()
routes.get('/register', UsersController.store)

export default routes

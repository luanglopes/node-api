import { Router } from 'express'

import AnylistController from '../controllers/AnylistController'

const routes = Router()
const anylistController = new AnylistController()

routes.get('/', anylistController.index)

export default routes

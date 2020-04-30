import { Router } from 'express'

import anylistRoutes from './anylists.routes'

const routes = Router()

routes.get('/', (req, res) => res.json({ hello: 'world' }))

routes.use('/anylists', anylistRoutes)

export default routes

import { Repository, EntityRepository } from 'typeorm'

import Anylist from '../models/Anylist'

@EntityRepository(Anylist)
class AnylistRepository extends Repository<Anylist> {}

export default AnylistRepository

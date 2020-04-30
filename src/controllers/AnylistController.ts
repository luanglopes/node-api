import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import AnylistRepository from '../repositories/AnylistRepository'

class AnylistController {
  async index(req: Request, res: Response): Promise<Response> {
    const { page, size, includes } = req.query

    const pageNumber = parseInt(String(page), 10)

    const take = parseInt(String(size), 10)
    let relations: string[] = []

    if (includes) {
      if (includes instanceof Array) {
        relations = includes.map(rel => String(rel))
      } else {
        relations = [String(includes)]
      }
    }
    const skip = (pageNumber - 1) * take

    const anylistRepository = getCustomRepository(AnylistRepository)

    const anylists = await anylistRepository.find({
      relations,
      skip,
      take,
    })

    return res.json(anylists)
  }
}

export default AnylistController

import { Request, Response } from 'express'
import knex from '../database/connection'
import config from '../../../config'

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => ({
      id: item.id,
      title: item.title,
      image_url: `http://${config.server_address}:${config.server_port}/assets/${item.image}`
    }))
  
    return response.json(serializedItems)
  }
}

export default ItemsController
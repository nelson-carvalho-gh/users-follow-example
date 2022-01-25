import { Follower } from "entities/Follower";
import { getRepository, Repository } from "typeorm";

export class FollowersRepository {
  private readonly ormRep: Repository<Follower>

  constructor() {
    this.ormRep = getRepository(Follower)
  }

  public async create({ follower_id, following_id }) {
    const user = this.ormRep.create({ follower_id, following_id  })
    
    await this.ormRep.save(user)

    return user
  }
}
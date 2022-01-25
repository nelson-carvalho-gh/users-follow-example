import { User } from "entities/User";
import { getRepository, Repository } from "typeorm";

export class UsersRepository {
  private readonly ormRep: Repository<User>

  constructor() {
    this.ormRep = getRepository(User)
  }

  public async findAll() {
    return this.ormRep.findAndCount({
      relations: ['followersMany', 'followingsMany']
    })
  }

  public async create({ email }) {
    const user = this.ormRep.create({ email })
    
    await this.ormRep.save(user)

    return user
  }
}
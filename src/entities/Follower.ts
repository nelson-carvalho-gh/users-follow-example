import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { User } from "./User";

@Entity('followers')
export class Follower {
  @PrimaryColumn()
  id: string

  @Column()
  following_id: string

  @Column()
  follower_id: string

  constructor() {
    if (!this.id) this.id = v4()
  }
}
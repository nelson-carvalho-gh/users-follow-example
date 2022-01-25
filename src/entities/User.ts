import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { Follower } from "./Follower";

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  email: string

  @ManyToMany(() => User)
  @JoinTable({ name: 'followers', joinColumn: { name: 'following_id' }, inverseJoinColumn: { name: 'follower_id' } })
  followersMany: User[]
  
  @ManyToMany(() => User)
  @JoinTable({ name: 'followers', joinColumn: { name: 'follower_id' }, inverseJoinColumn: { name: 'following_id' }  })
  followingsMany: User[]

  constructor() {
    if (!this.id) this.id = v4()
  }
}
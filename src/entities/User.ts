import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { Follower } from "./Follower";

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  email: string

  // Não deve usar Eager!!!
  @ManyToMany(() => User)
  @JoinTable({
    name: 'followers',
    joinColumn: { name: 'following_id' },
    inverseJoinColumn: { name: 'follower_id' }
  })
  // Não liga pro nome, fiz assim pq testei o one to many antes e ficou bugado demais
  followersMany: User[]
  
  // Não deve usar Eager!!!
  @ManyToMany(() => User)
  @JoinTable({
    name: 'followers',
    joinColumn: { name: 'follower_id' },
    inverseJoinColumn: { name: 'following_id' }
  })
  // Não liga pro nome, fiz assim pq testei o one to many antes e ficou bugado demais
  followingsMany: User[]

  constructor() {
    if (!this.id) this.id = v4()
  }
}
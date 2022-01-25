import './connect'
import express from 'express'
import { UsersRepository } from 'repositories/UsersRepository'
import { Follower } from 'entities/Follower'
import { FollowersRepository } from 'repositories/FollowersRepository'

const app = express()
app.use(express.json())


app.post('/users', async (req, res) => {
  const usersRep = new UsersRepository()

  const { email } = req.body

  const user = await usersRep.create({ email})

  return res.json(user)
})


app.get('/users', async (req, res) => {
  const usersRep = new UsersRepository()

  const users = await usersRep.findAll()

  return res.json(users)
})


app.post('/follow', async (req, res) => {
  const followersRep = new FollowersRepository()

  const { follower_id, following_id } = req.body

  const follower = await followersRep.create({ follower_id, following_id })

  return res.json(follower)
})


app.listen(3333, () => console.log('run'))
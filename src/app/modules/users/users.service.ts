import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateIncrementalId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto Generated incremental Id
  const id = await generateIncrementalId()
  user.id = id as string
  //Default Password
  if (!user.password) {
    user.password = config.defaultUserPassword as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new Error('Failed to create user from service')
  }
  return createdUser
}

export default {
  createUser,
}

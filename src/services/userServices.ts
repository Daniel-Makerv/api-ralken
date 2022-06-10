import { UserEntry } from '../types'
import usersJson from '../users.json'

const users: UserEntry[] = usersJson as UserEntry[];
export const getUsers = (): UserEntry[] => users;

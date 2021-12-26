
export type User = {
  name: string
  username: string
  token:string
  password: string
  role:string
}
export type UserList = Array<User>

export async function login(username: string, password: string): Promise<User | undefined> {
  const request = await fetch('/users.json')
  const usersJson: UserList = await request.json()
  return usersJson.find(user=>user.password === password && user.username === username )
}

export async function getUser(): Promise<User> {
  const request = await fetch('/current.json')
  const user: User = await request.json()
  return user
}

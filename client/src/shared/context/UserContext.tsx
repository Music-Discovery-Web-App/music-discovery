import { createContext, useState } from "react"

type AuthUser = {
  email: string
  name: string
  loggedIn: boolean
}

type UserContextType = {
  user: AuthUser | null // Specify the type of user
  setUser: (user: AuthUser | null) => void
}

type UserContextProviderType = {
  children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<AuthUser | null>({
    email: "",
    name: "",
    loggedIn: false,
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

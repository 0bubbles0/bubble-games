import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"

const passKey = "hi"

type AuthContextData = {
  isAuthed: boolean
  enteredPassword: string
  setEnteredPassword: Dispatch<SetStateAction<string>>
}

const AuthContext = createContext<AuthContextData>({
  isAuthed: false,
  enteredPassword: "",
  setEnteredPassword: () => "",
})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const [enteredPassword, setEnteredPassword] = useState<string>("")
  const isAuthed = enteredPassword === passKey // TODO: compare to user input

  return (
    <AuthContext.Provider
      value={{
        isAuthed,
        enteredPassword,
        setEnteredPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

import Head from "next/head"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"

import { useAuth } from "context/authContext"

export function LogIn() {
  const router = useRouter()
  const [userPassword, setUserPassword] = useState<string>("")
  // const { setEnteredPassword } = useAuth()

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    // setEnteredPassword(userPassword)
    return userService.login(userPassword).then(() => {
      // get return url from query parameters or default to '/'
      const returnUrl = router.query.returnUrl ?? "/"
      router.push(returnUrl)
    })
  }

  return (
    <>
      <Head>
        <title>Passwortkontrolle</title>
      </Head>
      <main>
        <h1>Wie heißt das super geheime Passwort?</h1>
        <form onSubmit={onSubmit}>
          <label>
            Passwort:
            <input
              type="password"
              name="password"
              value={userPassword}
              onChange={event =>
                void setUserPassword(event.currentTarget.value)
              }
            />
          </label>
          <button type="submit">Senden</button>
        </form>
      </main>
    </>
  )
}

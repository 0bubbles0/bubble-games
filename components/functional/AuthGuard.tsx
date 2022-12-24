import { useEffect, useState } from "react"
import { useRouter } from "next/router"

// import { useAuth } from "context/authContext"

export function AuthGuard({
  children,
}: {
  children: JSX.Element
}): JSX.Element {
  const router = useRouter()
  const [authorised, setAuthorised] = useState(false)

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath)

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorised(false)
    router.events.on("routeChangeStart", hideContent)

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent)
      router.events.off("routeChangeComplete", authCheck)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function authCheck(url: string) {
    const publicPaths = ["/login"]
    const path = url.split("?")[0] ?? ""
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorised(false)
      router.push({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      })
    } else {
      setAuthorised(true)
    }
  }

  return authorised && children

  // const { isAuthed } = useAuth()
  // return isAuthed ? { children } : <Log />
}

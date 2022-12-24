import "../styles/globals.css"

import { Layout } from "components/Layout"
import { AuthGuard } from "components/functional/AuthGuard"
import { AuthProvider } from "context/authContext"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      </Layout>
    </AuthProvider>
  )
}

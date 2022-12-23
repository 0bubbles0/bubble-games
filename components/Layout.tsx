import Head from "next/head"

import { Navbar } from "./Navbar"

type LayoutProps = {
  children: JSX.Element
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Play cool games" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/bubble-mini.png"
        />
      </Head>
      <div className="app">
        {/* Any Pop-up modals */}
        <div className="viewport">
          <Navbar />

          <main className="canvas"> {children}</main>
        </div>
      </div>
    </>
  )
}

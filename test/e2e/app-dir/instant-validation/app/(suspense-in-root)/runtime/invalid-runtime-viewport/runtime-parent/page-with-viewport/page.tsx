import type { Viewport } from 'next'
import { Suspense } from 'react'
import { cookies } from 'next/headers'
import { connection } from 'next/server'
import Link from 'next/link'

// There should be a runtime prefetch config here,
// not on the parent layout
export const unstable_instant = { prefetch: 'static' }

export async function generateViewport(): Promise<Viewport> {
  await cookies()
  return {
    themeColor: 'aliceblue',
  }
}

export default function Page() {
  return (
    <main>
      <p>This page has a runtime generateViewport</p>
      <p>
        We also access runtime data in the page itself, because a static page
        with a runtime vieport is not allowed.
      </p>
      <Suspense>
        <Runtime />
      </Suspense>
      <div>
        <br />
        <Link href="/runtime/invalid-runtime-viewport/outside-runtime-parent">
          outside of runtime layout
        </Link>
        <br />
        <Link href="/runtime/invalid-runtime-viewport/runtime-parent">
          inside of runtime layout
        </Link>
      </div>
    </main>
  )
}

async function Runtime() {
  // await cookies()
  await connection()
  return null
}

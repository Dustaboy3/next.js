import type { Viewport } from 'next'
import { Suspense } from 'react'
import { cookies } from 'next/headers'
import Link from 'next/link'

export const unstable_instant = {
  prefetch: 'runtime',
  samples: [{ cookies: [] }],
}

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
        <Link href="/runtime/valid-runtime-viewport/other">
          blocking viewport - other
        </Link>
      </div>
    </main>
  )
}

async function Runtime() {
  await cookies()
  return null
}

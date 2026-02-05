import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <Link href="/runtime/invalid-runtime-viewport/runtime-parent/page-with-viewport">
        blocking viewport
      </Link>
    </main>
  )
}

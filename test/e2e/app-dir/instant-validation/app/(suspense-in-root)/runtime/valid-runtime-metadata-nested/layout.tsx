export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Static title',
  }
}

export default function Layout({ children }) {
  return <>{children}</>
}

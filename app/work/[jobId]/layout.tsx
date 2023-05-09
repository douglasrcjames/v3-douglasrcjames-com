export const metadata = {
  title: 'Job',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="container px-5">
        <div className="bg-green-500 h-1/6"/>
        <div>
            {children}
        </div>
    </main>
  )
}

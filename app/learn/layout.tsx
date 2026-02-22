import { LearnSidebar } from '@/components/learn-sidebar'

export default function LearnLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 md:flex-row">
      <LearnSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

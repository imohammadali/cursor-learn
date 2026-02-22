'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { chapters } from '@/lib/content'

export function LearnSidebar() {
  const pathname = usePathname()
  const activeSlug = pathname === '/learn' ? '' : pathname.replace(/^\/learn\//, '')

  return (
    <aside className="border-l border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 md:sticky md:top-0 md:h-screen md:w-64 md:flex-shrink-0 md:border-r md:border-l-0">
      <div className="flex flex-col gap-1 p-4 md:p-6">
        <Link
          href="/"
          className="mb-4 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          → بازگشت
        </Link>
        <span className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          مبانی هوش مصنوعی
        </span>
        <nav className="flex flex-col gap-0.5">
          {chapters.map((chapter) => {
            const isActive =
              (chapter.slug === '' && activeSlug === '') ||
              (chapter.slug !== '' && activeSlug === chapter.slug)
            return (
              <Link
                key={chapter.id}
                href={chapter.slug ? `/learn/${chapter.slug}` : '/learn'}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-zinc-100 font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                    : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
                }`}
              >
                {chapter.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

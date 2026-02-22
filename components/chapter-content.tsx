import Link from 'next/link'
import type { Chapter } from '@/lib/content'

interface ChapterContentProps {
  chapter: Chapter
}

function renderSection(section: Chapter['sections'][0], index: number) {
  const key = `section-${index}`

  switch (section.type) {
    case 'heading':
      return (
        <h2
          key={key}
          className="mt-8 text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:mt-10 md:text-2xl"
        >
          {section.content as string}
        </h2>
      )
    case 'paragraph':
      return (
        <p
          key={key}
          className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300"
        >
          {section.content as string}
        </p>
      )
    case 'list':
      return (
        <ul key={key} className="mt-4 list-disc space-y-2 pr-6 text-zinc-700 dark:text-zinc-300">
          {(section.content as string[]).map((item, i) => (
            <li key={`${key}-${i}`} className="leading-7">
              {item}
            </li>
          ))}
        </ul>
      )
    case 'code':
      return (
        <pre
          key={key}
          className="mt-4 overflow-x-auto rounded-lg bg-zinc-100 p-4 font-mono text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
          dir="ltr"
        >
          <code>{section.content as string}</code>
        </pre>
      )
    default:
      return null
  }
}

export function ChapterContent({ chapter }: ChapterContentProps) {
  return (
    <article className="mx-auto max-w-2xl rounded-lg bg-white px-4 py-10 shadow-sm dark:bg-zinc-900 md:mx-6 md:my-6 md:px-8 md:py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl">
          {chapter.title}
        </h1>
        {chapter.titleEn && (
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {chapter.titleEn}
          </p>
        )}
      </header>
      <div className="space-y-0">
        {chapter.sections.map((section, index) =>
          renderSection(section, index)
        )}
      </div>
      {chapter.nextSlug && (
        <footer className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <Link
            href={`/learn/${chapter.nextSlug}`}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            ادامهٔ یادگیری
            <span aria-hidden>←</span>
          </Link>
        </footer>
      )}
    </article>
  )
}

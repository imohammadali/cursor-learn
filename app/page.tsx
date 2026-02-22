import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
      <main className="max-w-xl text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 md:text-4xl">
          آموزش کرسور
        </h1>
        <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
          دورهٔ مبانی هوش مصنوعی برای برنامه‌نویسان — ترجمهٔ فارسی دورهٔ{' '}
          <a
            href="https://cursor.com/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-100"
          >
            Cursor Learn
          </a>
        </p>
        <Link
          href="/learn"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          شروع یادگیری
          <span aria-hidden>←</span>
        </Link>
      </main>
    </div>
  )
}

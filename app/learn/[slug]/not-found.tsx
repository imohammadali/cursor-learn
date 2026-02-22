import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        فصل یافت نشد
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        این بخش وجود ندارد یا حذف شده است.
      </p>
      <Link
        href="/learn"
        className="mt-6 text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-100"
      >
        بازگشت به فهرست دوره
      </Link>
    </div>
  )
}

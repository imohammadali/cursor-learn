import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ChapterContent } from '@/components/chapter-content'
import { chapters, getChapterBySlug } from '@/lib/content'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const chapter = getChapterBySlug(slug)
  if (!chapter || !chapter.slug) return {}
  return {
    title: `${chapter.title} | آموزش کرسور`,
    description: chapter.sections.find((s) => s.type === 'paragraph')?.content as string
  }
}

export function generateStaticParams() {
  return chapters
    .filter((c) => c.slug)
    .map((c) => ({ slug: c.slug }))
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params
  const chapter = getChapterBySlug(slug)
  if (!chapter || !chapter.slug) notFound()
  return <ChapterContent chapter={chapter} />
}

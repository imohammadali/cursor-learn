import type { Metadata } from 'next'
import { ChapterContent } from '@/components/chapter-content'
import { chapters } from '@/lib/content'

export const metadata: Metadata = {
  title: 'مبانی هوش مصنوعی | آموزش کرسور',
  description: 'دورهٔ یادگیری کار با هوش مصنوعی برای برنامه‌نویسان'
}

export default function LearnPage() {
  const introChapter = chapters[0]
  return <ChapterContent chapter={introChapter} />
}

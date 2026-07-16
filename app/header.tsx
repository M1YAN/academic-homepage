'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Yan Mi (密言)
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Master Student · ICT, CAS
        </TextEffect>
      </div>
      <nav className="flex flex-wrap gap-3 text-sm text-zinc-500 dark:text-zinc-400">
        <a className="hidden transition-colors hover:text-zinc-950 sm:inline dark:hover:text-zinc-50" href="#news">
          News
        </a>
        <a className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50" href="#publications">
          Publications
        </a>
        <a className="hidden transition-colors hover:text-zinc-950 sm:inline dark:hover:text-zinc-50" href="#honors-and-awards">
          Honors
        </a>
        <a className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50" href="#educations">
          Educations
        </a>
        <a className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50" href="#internships">
          Internships
        </a>
        <a className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  )
}

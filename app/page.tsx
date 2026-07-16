'use client'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from '@/components/ui/morphing-dialog'
import {
  AWARDS,
  EDUCATION,
  EMAIL,
  NEWS,
  PROFILE,
  PUBLICATIONS,
  SOCIAL_LINKS,
  WORK_EXPERIENCE,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function renderInlineMarkdown(text: string): ReactNode[] {
  const parts = text.split(
    /(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_|\[[^\]]+\]\([^)]+\))/g,
  )

  return parts.map((part, index) => {
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/)
    if (boldMatch) {
      return (
        <strong key={index} className="font-medium text-zinc-900 dark:text-zinc-100">
          {boldMatch[1]}
        </strong>
      )
    }

    const italicMatch = part.match(/^(?:\*([^*]+)\*|_([^_]+)_)$/)
    if (italicMatch) {
      return (
        <em key={index} className="italic">
          {italicMatch[1] ?? italicMatch[2]}
        </em>
      )
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          {linkMatch[1]}
        </a>
      )
    }

    return part
  })
}

function PublicationImage({ src, alt }: { src: string; alt: string }) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger className="relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
        <MorphingDialogImage
          src={src}
          alt={alt}
          className="aspect-video h-full w-full cursor-zoom-in object-cover"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative max-w-[90vw] rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <MorphingDialogImage
            src={src}
            alt={alt}
            className="max-h-[80vh] w-full rounded-xl object-contain"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        id="about-me"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="h-24 w-24 rounded-2xl object-cover ring-1 ring-zinc-200/70 dark:ring-zinc-800"
          />
          <div className="flex-1 space-y-3">
            <p className="text-zinc-600 dark:text-zinc-400">
              {renderInlineMarkdown(PROFILE.about)}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              {PROFILE.bio} · {PROFILE.location}
            </p>
            <div className="flex flex-wrap gap-2">
              {PROFILE.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="news"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">News</h3>
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
        >
          {NEWS.map((item) => (
            <div
              key={`${item.date}-${item.content}`}
              className="-mx-3 rounded-xl px-3 py-3"
              data-id={item.date}
            >
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {item.date}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                {renderInlineMarkdown(item.content)}
              </p>
            </div>
          ))}
        </AnimatedBackground>
      </motion.section>

      <motion.section
        id="publications"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Publications</h3>
        <div className="flex flex-col space-y-4">
          {PUBLICATIONS.map((paper) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={paper.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={96}
              />
              <div className="relative grid gap-4 rounded-[15px] bg-white p-4 dark:bg-zinc-950 sm:grid-cols-[160px_1fr]">
                <div className="relative">
                  <PublicationImage src={paper.image} alt={paper.title} />
                  <span className="absolute left-2 top-2 rounded-full bg-zinc-950 px-2 py-1 text-xs text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950">
                    {paper.venue}
                  </span>
                </div>
                <div className="space-y-2">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal leading-snug text-zinc-900 underline-offset-4 transition-colors hover:underline dark:text-zinc-100"
                  >
                    {paper.title}
                  </a>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {renderInlineMarkdown(paper.authors)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="honors-and-awards"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Honors and Awards</h3>
        <div className="flex w-full flex-col">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {AWARDS.map((award) => (
              <div
                key={award.id}
                className="w-full rounded-xl"
                data-id={award.id}
              >
                <div className="w-full space-y-1 px-3 py-3">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {award.date}
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    {award.title}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        id="educations"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Educations</h3>
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((education) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={education.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between gap-4">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {education.school}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {education.description}
                    </p>
                  </div>
                  <p className="shrink-0 text-right text-zinc-600 dark:text-zinc-400">
                    {education.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="internships"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Internships</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between gap-4">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="shrink-0 text-right text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Contact</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-start gap-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}

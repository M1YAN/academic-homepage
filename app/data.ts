type Profile = {
  name: string
  title: string
  bio: string
  location: string
  avatar: string
  interests: string[]
}

type NewsItem = {
  date: string
  content: string
}

type Publication = {
  title: string
  authors: string
  venue: string
  link: string
  image: string
  id: string
}

type Award = {
  date: string
  title: string
  id: string
}

type Education = {
  school: string
  period: string
  description: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROFILE: Profile = {
  name: 'Yan Mi (密言)',
  title: '1st year Master student at ICT, CAS',
  bio: '别赶路，去感受路。',
  location: 'Beijing, China',
  avatar: 'https://m1yan.github.io/personal-homepage/images/miyan-avatar-real.jpg',
  interests: ['LLM4Rec', 'Agent', 'Trustworthy AI'],
}

export const NEWS: NewsItem[] = [
  {
    date: '2026.01',
    content:
      "Our paper Goal-Aware Identification and Rectification of Misinformation in Multi-Agent Systems was accepted by ICLR'26.",
  },
]

export const PUBLICATIONS: Publication[] = [
  {
    title:
      'Goal-Aware Identification and Rectification of Misinformation in Multi-Agent Systems',
    authors:
      'Zherui Li, Yan Mi, Zhenhong Zhou, Houcheng Jiang, Guibin Zhang, Kun Wang, Junfeng Fang',
    venue: 'ICLR 2026',
    link: 'https://arxiv.org/abs/2506.00509',
    image: 'https://m1yan.github.io/personal-homepage/images/ARGUS.png',
    id: 'paper-argus',
  },
]

export const AWARDS: Award[] = [
  {
    date: '2022-2023 school year',
    title: 'Triple-A Students Honor in BUPT',
    id: 'award-1',
  },
  {
    date: '2024.12',
    title: 'First Prize in Beijing, RAICOM Robot Developer Competition',
    id: 'award-2',
  },
  {
    date: '2024.12',
    title:
      'National First Prize, Global Campus Artificial Intelligence Algorithm Elite Competition',
    id: 'award-3',
  },
  {
    date: '2025.10',
    title: 'Academic Scholarship in BUPT',
    id: 'award-4',
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'School of Future, Beijing University of Posts and Telecommunications',
    period: '2022.09 - 2026.06',
    description: 'Undergraduate study before joining ICT, CAS.',
    id: 'education-1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Institute of Computing Technology, Chinese Academy of Sciences',
    title: 'Research Intern',
    start: '2025.02',
    end: '2026.06',
    link: 'https://www.ict.ac.cn/',
    id: 'work1',
  },
  {
    company: 'Alibaba Group (TAOBAO & TMALL Group)',
    title: 'Intern, GUI-agent based User Simulation',
    start: '2025.12',
    end: '2026.08',
    link: 'https://www.alibabagroup.com/',
    id: 'work2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Google Scholar',
    link: 'https://scholar.google.com/citations?user=glEPK5kAAAAJ',
  },
  {
    label: 'Github',
    link: 'https://github.com/M1YAN',
  },
]

export const EMAIL = 'miyan@bupt.edu.cn'

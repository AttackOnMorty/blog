interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GitHub Trends',
    description: `Compare GitHub repositories by the history of stars, commits, releases...`,
    href: 'https://www.github-trends.dev/',
  },
  {
    title: 'GitHub Ranking',
    description: `Search GitHub's top repositories, users and organizations.`,
    href: 'https://www.github-ranking.dev/',
  },
]

export default projectsData

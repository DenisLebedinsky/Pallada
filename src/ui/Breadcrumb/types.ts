export interface BreadcrumbsProps {
  list: Crumb[]
}

export type Crumb = {
  title: string
  routePath: RoutePath
}

export type RoutePath = {
  href: string
  as: string
}

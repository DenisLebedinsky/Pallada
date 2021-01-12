import Link from 'next/link'
import { BreadcrumbsProps } from 'src/ui/Breadcrumb/types'
import css from './Breadcrumb.module.scss'

const Breadcrumb = ({ list }: BreadcrumbsProps) => {
  return (
    <div className={css.breadcrumb}>
      {!!list?.length &&
        list.map((crumb, i, arr) => (
          <div key={`crumb-${i}`} className={css.item}>
            {i > 0 && '/'}
            <Link href={crumb.routePath.href} as={crumb.routePath.as}>
              <a href={crumb.routePath.as} className={arr.length === i + 1 ? css.last : ''}>
                {crumb.title}
              </a>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Breadcrumb

import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Tree = ({
  width,
  height,
  className,
  fill = '#003E66',
}: IconProps<{ fill?: string }>): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 10 11'>
    <g fill='none' fillRule='evenodd' opacity='.721'>
      <path d='M-3 14V-2h16v16z' />
      <path
        d='M8.467.667c-.853 0-1.442.66-1.442 1.466 0 .567.303 1.04.775 1.334V4.8H2.467V3.42c.466-.247.8-.72.8-1.287 0-.806-.66-1.466-1.467-1.466S.333 1.327.333 2.133c0 .567.334 1.04.8 1.287V4.8c0 .74.594 1.333 1.334 1.333h2v2.034c-.474.246-.8.733-.8 1.3a1.467 1.467 0 002.933 0c0-.567-.327-1.054-.8-1.3V6.133h2c.74 0 1.333-.593 1.333-1.333V3.467c.53-.294.775-.767.775-1.334 0-.806-.641-1.466-1.44-1.466z'
        fill={fill}
      />
    </g>
  </Icon>
)

export default Tree

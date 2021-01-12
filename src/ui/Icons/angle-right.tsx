import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const AngleRight = ({ width, height, fill = '#FFF', className }: IconProps): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 13 20'>
    <g fill='none' fillRule='evenodd'>
      <path fill={fill} d='M.3166667 17.65L7.95 10 .3166667 2.35l2.35-2.35 10 10-10 10z' />
      <path d='M-14 30v-40h40v40z' />
    </g>
  </Icon>
)

export default AngleRight

import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const AngleLeft = ({ width, height, className }: IconProps): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 13 20'>
    <g fill='none' fillRule='evenodd'>
      <path fill='#FFF' d='M12.6833333 17.65L5.05 10l7.6333333-7.65-2.35-2.35-10 10 10 10z' />
      <path d='M27 30v-40h-40v40z' />
    </g>
  </Icon>
)

export default AngleLeft

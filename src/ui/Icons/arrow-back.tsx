import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const ArrowBack = ({ width, height, className }: IconProps): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 16 16'>
    <g fill='none' fillRule='evenodd'>
      <path d='M-4-4h24v24H-4z' />
      <path
        fill='#003E66'
        fillRule='nonzero'
        d='M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16z'
      />
    </g>
  </Icon>
)

export default ArrowBack

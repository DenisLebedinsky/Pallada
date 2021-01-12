import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const ArrowDropDown = ({ width, height, className }: IconProps): ReactElement => (
  <Icon viewBox='0 0 10 5' width={width} height={height} className={className}>
    <g fill='none' fillRule='evenodd'>
      <path fill='#003E66' fillRule='nonzero' d='M0 0l5 5 5-5z' />
      <path d='M-7-10h24v24H-7z' />
    </g>
  </Icon>
)

export default ArrowDropDown

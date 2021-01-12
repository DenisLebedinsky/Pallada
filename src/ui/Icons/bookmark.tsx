import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Bookmark = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 20 20' className={className}>
    <g fill='none' fillRule='evenodd'>
      <path d='M-2-2h24v24H-2z' />
      <path d='M2 4H0v14c0 1.1.9 2 2 2h14v-2H2V4z' fill='#003E66' fillRule='nonzero' />
      <path d='M-2-2h24v24H-2z' />
      <path
        d='M18 0H6C4.9 0 4 .9 4 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L13 10V2h5v8z'
        fill='#003E66'
        fillRule='nonzero'
      />
    </g>
  </Icon>
)

export default Bookmark

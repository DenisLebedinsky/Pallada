import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const DeleteOutline = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 14 18' className={className}>
    <g fill='none' fillRule='evenodd'>
      <path
        d='M1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4H1v12zM3 6h8v10H3V6zm7.5-5l-1-1h-5l-1 1H0v2h14V1h-3.5z'
        fill='#F96004'
        fillRule='nonzero'
      />
      <path d='M-5-3h24v24H-5z' />
    </g>
  </Icon>
)

export default DeleteOutline

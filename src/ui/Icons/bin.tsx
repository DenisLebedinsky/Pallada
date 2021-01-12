import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Bin = ({
  width,
  height,
  className,
  fill = '#f96004',
}: IconProps<{ fill?: string }>): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 14 18'>
    <g fill='none' fillRule='evenodd' opacity='.60288783'>
      <path
        d='M1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4H1v12zM3 6h8v10H3V6zm7.5-5l-1-1h-5l-1 1H0v2h14V1h-3.5z'
        fill={fill}
        fillRule='nonzero'
      />
      <path d='M-5-3h24v24H-5z' />
    </g>
  </Icon>
)

export default Bin

import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Account = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 20 20' className={className}>
    <g fill='none' fillRule='evenodd'>
      <path
        d='M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'
        fill='#003E66'
      />
      <path d='M-2-2h24v24H-2z' />
    </g>
  </Icon>
)

export default Account

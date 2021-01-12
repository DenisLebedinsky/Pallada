import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Close = ({ width, height, className, color = '#003E66' }: IconProps): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 14 14'>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-325.000000, -25.000000)'>
        <g transform='translate(320.000000, 20.000000)'>
          <path
            fill={color}
            d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
          />
          <path d='M0 24 0 0 24 0 24 24z' />
        </g>
      </g>
    </g>
  </Icon>
)

export default Close

import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Check = ({
  width,
  height,
  className,
  fill = '#47C910',
}: IconProps<{ fill?: string }>): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 16 12'>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-312.000000, -158.000000)'>
        <g transform='translate(310.000000, 154.000000)'>
          <path d='M0 0 20 0 20 20 0 20z' />
          <path
            fill={fill}
            fillRule='nonzero'
            d='M7.5 13.5 4 10 2.83333333 11.1666667 7.5 15.8333333 17.5 5.83333333 16.3333333 4.66666667z'
          />
        </g>
      </g>
    </g>
  </Icon>
)

export default Check

import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Mail = ({ width, height, fill = '#FFFFFF', className }: IconProps): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 34 28'>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-163.000000, -114.000000)'>
        <g transform='translate(160.000000, 108.000000)'>
          <path d='M0 0 40 0 40 40 0 40z' />
          <path
            d='M36.6666667,10 C36.6666667,8.16666667 35.1666667,6.66666667 33.3333333,6.66666667 L6.66666667,6.66666667 C4.83333333,6.66666667 3.33333333,8.16666667 3.33333333,10 L3.33333333,30 C3.33333333,31.8333333 4.83333333,33.3333333 6.66666667,33.3333333 L33.3333333,33.3333333 C35.1666667,33.3333333 36.6666667,31.8333333 36.6666667,30 L36.6666667,10 Z M33.3333333,10 L20,18.3166667 L6.66666667,10 L33.3333333,10 Z M33.3333333,30 L6.66666667,30 L6.66666667,13.3333333 L20,21.6666667 L33.3333333,13.3333333 L33.3333333,30 Z'
            fill={fill}
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default Mail

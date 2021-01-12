import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Message = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 34 34' className={className}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-163.000000, -111.000000)'>
        <g transform='translate(160.000000, 108.000000)'>
          <path d='M0 0 40 0 40 40 0 40z'></path>
          <path
            d='M6.66666667,6.66666667 L33.3333333,6.66666667 L33.3333333,26.6666667 L8.61666667,26.6666667 L6.66666667,28.6166667 L6.66666667,6.66666667 M6.66666667,3.33333333 C4.83333333,3.33333333 3.35,4.83333333 3.35,6.66666667 L3.33333333,36.6666667 L10,30 L33.3333333,30 C35.1666667,30 36.6666667,28.5 36.6666667,26.6666667 L36.6666667,6.66666667 C36.6666667,4.83333333 35.1666667,3.33333333 33.3333333,3.33333333 L6.66666667,3.33333333 Z M10,20 L30,20 L30,23.3333333 L10,23.3333333 L10,20 Z M10,15 L30,15 L30,18.3333333 L10,18.3333333 L10,15 Z M10,10 L30,10 L30,13.3333333 L10,13.3333333 L10,10 Z'
            fill='#FFFFFF'
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default Message

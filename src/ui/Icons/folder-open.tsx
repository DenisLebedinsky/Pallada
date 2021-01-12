import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const FolderOpen = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 34 28' className={className}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-565.000000, -208.000000)'>
        <g transform='translate(562.000000, 202.000000)'>
          <path d='M0 0 40 0 40 40 0 40z'></path>
          <path
            d='M33.3333333,10 L20,10 L16.6666667,6.66666667 L6.66666667,6.66666667 C4.83333333,6.66666667 3.35,8.16666667 3.35,10 L3.33333333,30 C3.33333333,31.8333333 4.83333333,33.3333333 6.66666667,33.3333333 L33.3333333,33.3333333 C35.1666667,33.3333333 36.6666667,31.8333333 36.6666667,30 L36.6666667,13.3333333 C36.6666667,11.5 35.1666667,10 33.3333333,10 Z M33.3333333,30 L6.66666667,30 L6.66666667,13.3333333 L33.3333333,13.3333333 L33.3333333,30 Z'
            fill='#003E66'
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default FolderOpen

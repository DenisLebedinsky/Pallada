import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Calendar = ({
  width = 18,
  height = 20,
  className,
  fill = '#003E66',
  opacity = '0.4',
}: IconProps<{ opacity?: string; fill?: string }>): ReactElement => (
  <Icon
    opacity={opacity}
    className={className}
    width={width}
    height={height}
    fill={fill}
    viewBox='0 0 18 20'
  >
    <g stroke='none' fill='none' opacity={opacity}>
      <g transform='translate(-295.000000, -490.000000)'>
        <g transform='translate(32.000000, 476.000000)'>
          <g transform='translate(260.000000, 12.000000)'>
            <polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
            <path
              d='M7,11 L9,11 L9,13 L7,13 L7,11 Z M21,6 L21,20 C21,21.1 20.1,22 19,22 L5,22 C3.89,22 3,21.1 3,20 L3.01,6 C3.01,4.9 3.89,4 5,4 L6,4 L6,2 L8,2 L8,4 L16,4 L16,2 L18,2 L18,4 L19,4 C20.1,4 21,4.9 21,6 Z M5,8 L19,8 L19,6 L5,6 L5,8 Z M19,20 L19,10 L5,10 L5,20 L19,20 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z'
              id='Shape'
              fill={fill}
              fillRule='nonzero'
            ></path>
          </g>
        </g>
      </g>
    </g>
  </Icon>
)

export default Calendar

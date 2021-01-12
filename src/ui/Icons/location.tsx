import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Location = ({
  width = 18,
  height = 19,
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
    viewBox='0 0 18 19'
  >
    <g stroke='none' fill='none' opacity={opacity}>
      <g transform='translate(-295.000000, -554.000000)'>
        <g transform='translate(32.000000, 540.000000)'>
          <g transform='translate(260.000000, 12.000000)'>
            <polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
            <path
              d='M15,11 L15,5 L12,2 L9,5 L9,7 L3,7 L3,21 L21,21 L21,11 L15,11 Z M7,19 L5,19 L5,17 L7,17 L7,19 Z M7,15 L5,15 L5,13 L7,13 L7,15 Z M7,11 L5,11 L5,9 L7,9 L7,11 Z M13,19 L11,19 L11,17 L13,17 L13,19 Z M13,15 L11,15 L11,13 L13,13 L13,15 Z M13,11 L11,11 L11,9 L13,9 L13,11 Z M13,7 L11,7 L11,5 L13,5 L13,7 Z M19,19 L17,19 L17,17 L19,17 L19,19 Z M19,15 L17,15 L17,13 L19,13 L19,15 Z'
              fill={fill}
              fillRule='nonzero'
            ></path>
          </g>
        </g>
      </g>
    </g>
  </Icon>
)

export default Location

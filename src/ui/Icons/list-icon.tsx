import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const ListIcon = ({
  width,
  height,
  className,
  fill = '#003E66',
  opacity = '1',
}: IconProps<{ fill?: string; opacity?: string }>): ReactElement => (
  <Icon
    opacity={opacity}
    className={className}
    width={width}
    height={height}
    fill={fill}
    viewBox='0 0 18 18'
  >
    <g stroke='none' fill='none'>
      <g transform='translate(-417.000000, -155.000000)'>
        <g transform='translate(340.000000, 136.000000)'>
          <g transform='translate(74.000000, 16.000000)'>
            <polygon points='0 0 24 0 24 24 0 24'></polygon>
            <path
              d='M11,7 L17,7 L17,9 L11,9 L11,7 Z M11,11 L17,11 L17,13 L11,13 L11,11 Z M11,15 L17,15 L17,17 L11,17 L11,15 Z M7,7 L9,7 L9,9 L7,9 L7,7 Z M7,11 L9,11 L9,13 L7,13 L7,11 Z M7,15 L9,15 L9,17 L7,17 L7,15 Z M20.1,3 L3.9,3 C3.4,3 3,3.4 3,3.9 L3,20.1 C3,20.5 3.4,21 3.9,21 L20.1,21 C20.5,21 21,20.5 21,20.1 L21,3.9 C21,3.4 20.5,3 20.1,3 L20.1,3 Z M19,19 L5,19 L5,5 L19,5 L19,19 Z'
              id='Shape'
              fill={fill}
            ></path>
          </g>
        </g>
      </g>
    </g>
  </Icon>
)

export default ListIcon

import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const MenuBurger = ({
  width = 18,
  height = 12,
  className,
  fill = '#003E66',
  opacity = '1',
}: IconProps<{ opacity?: string; fill?: string }>): ReactElement => (
  <Icon
    opacity={opacity}
    className={className}
    width={width}
    height={height}
    fill={fill}
    viewBox='0 0 18 12'
  >
    <g stroke='none' fill='none'>
      <g transform='translate(-19.000000, -26.000000)'>
        <g transform='translate(16.000000, 20.000000)'>
          <polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
          <path
            d='M3,18 L21,18 L21,16 L3,16 L3,18 Z M3,13 L21,13 L21,11 L3,11 L3,13 Z M3,6 L3,8 L21,8 L21,6 L3,6 Z'
            fill={fill}
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default MenuBurger

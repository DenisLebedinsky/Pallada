import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const TreeIcon = ({
  width,
  height,
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
    viewBox='0 0 18 18'
  >
    <g stroke='none' fill='none'>
      <g transform='translate(-361.000000, -155.000000)'>
        <g transform='translate(340.000000, 136.000000)'>
          <g transform='translate(18.000000, 16.000000)'>
            <polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
            <path
              d='M16,7 C17.1045695,7 18,7.8954305 18,9 C18,10.1045695 17.1045695,11 16,11 C15.1610331,11 14.4427193,10.4834225 14.1457798,9.75098877 L12.75,9.75 L12.7509888,13.1457798 C13.4395903,13.4249491 13.9373981,14.0765677 13.9945143,14.8507377 L14,15 C14,16.1045695 13.1045695,17 12,17 C10.8954305,17 10,16.1045695 10,15 C10,14.1606498 10.5170495,13.442063 11.2500152,13.1453731 L11.25,9.75 L9.85422019,9.75098877 C9.57505094,10.4395903 8.92343232,10.9373981 8.14926234,10.9945143 L8,11 C6.8954305,11 6,10.1045695 6,9 C6,7.8954305 6.8954305,7 8,7 C8.83935017,7 9.55793696,7.51704954 9.85462687,8.25001516 L14.1453731,8.25001516 C14.442063,7.51704954 15.1606498,7 16,7 Z M3.9,3 C3.4,3 3,3.4 3,3.9 L3,20.1 C3,20.5 3.4,21 3.9,21 L20.1,21 C20.5,21 21,20.5 21,20.1 L21,3.9 C21,3.4 20.5,3 20.1,3 L3.9,3 Z M19,19 L5,19 L5,5 L19,5 L19,19 Z'
              id='Shape'
              fill={fill}
            ></path>
          </g>
        </g>
      </g>
    </g>
  </Icon>
)

export default TreeIcon

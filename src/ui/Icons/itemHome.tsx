import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const ItemHome = ({ width, height, className, fill = '#FFFFFF' }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 20 10' className={className} fill={fill}>
    <g
      id='family-switcher'
      stroke='none'
      strokeWidth='1'
      fill='none'
      fillRule='evenodd'
      opacity='0.7210984'
    >
      <g id='20-00-04-Desktop-Family-switcer' transform='translate(-29.000000, -95.000000)'>
        <g id='Menu-item-icon-Copy' transform='translate(28.000000, 93.000000)'>
          <polygon id='Path' points='0 16 0 0 16 0 16 16'></polygon>
          <path
            d='M8,3.79333333 L11.3333333,6.79333333 L11.3333333,12 L10,12 L10,8 L6,8 L6,12 L4.66666667,12 L4.66666667,6.79333333 L8,3.79333333 M8,2 L1.33333333,8 L3.33333333,8 L3.33333333,13.3333333 L7.33333333,13.3333333 L7.33333333,9.33333333 L8.66666667,9.33333333 L8.66666667,13.3333333 L12.6666667,13.3333333 L12.6666667,8 L14.6666667,8 L8,2 Z'
            id='Shape'
            fill={fill}
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default ItemHome

import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const CheckBox = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 20 20' className={className}>
    <g id='GALLERY' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g
        id='04-00-04-Mobile-Gallery-albums-edit-Copy'
        transform='translate(-22.000000, -79.000000)'
      >
        <g id='check_box-24px' transform='translate(19.000000, 76.000000)'>
          <polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
          <path
            d='M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M19,19 L5,19 L5,5 L19,5 L19,19 Z M17.99,9 L16.58,7.58 L9.99,14.17 L7.41,11.6 L5.99,13.01 L9.99,17 L17.99,9 Z'
            id='Shape'
            fill='#003E66'
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default CheckBox

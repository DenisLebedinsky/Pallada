import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const MenuVert = ({ width, height, className, fill = '#003E66' }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 20 20' className={className} fill={fill}>
    <g id='GALLERY' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='04-00-04-Mobile-Gallery-albums-edit' transform='translate(-330.000000, -20.000000)'>
        <g id='more_vert-24px' transform='translate(320.000000, 16.000000)'>
          <polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
          <path
            d='M12,8 C13.1,8 14,7.1 14,6 C14,4.9 13.1,4 12,4 C10.9,4 10,4.9 10,6 C10,7.1 10.9,8 12,8 Z M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 Z M12,16 C10.9,16 10,16.9 10,18 C10,19.1 10.9,20 12,20 C13.1,20 14,19.1 14,18 C14,16.9 13.1,16 12,16 Z'
            id='Shape'
            fill='#003E66'
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default MenuVert

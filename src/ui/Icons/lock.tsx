import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Lock = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 20 20' className={className}>
    <g id='GALLERY' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='04-00-04-Mobile-Gallery-albums-edit' transform='translate(-140.000000, -117.000000)'>
        <g id='Group-3' transform='translate(128.000000, 108.000000)'>
          <g id='lock-24px' transform='translate(8.000000, 8.000000)'>
            <polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
            <path
              d='M18,8 L17,8 L17,6 C17,3.24 14.76,1 12,1 C9.24,1 7,3.24 7,6 L7,8 L6,8 C4.9,8 4,8.9 4,10 L4,20 C4,21.1 4.9,22 6,22 L18,22 C19.1,22 20,21.1 20,20 L20,10 C20,8.9 19.1,8 18,8 Z M12,17 C10.9,17 10,16.1 10,15 C10,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z M15.1,8 L8.9,8 L8.9,6 C8.9,4.29 10.29,2.9 12,2.9 C13.71,2.9 15.1,4.29 15.1,6 L15.1,8 Z'
              id='Shape'
              fill='#003E66'
              fillRule='nonzero'
            ></path>
          </g>
        </g>
      </g>
    </g>
  </Icon>
)

export default Lock

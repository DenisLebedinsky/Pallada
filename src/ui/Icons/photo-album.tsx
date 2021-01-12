import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const PhotoAlbum = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 16 20' className={className}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-765.000000, -113.000000)'>
        <g transform='translate(761.000000, 111.000000)'>
          <path d='M0 0 24 0 24 24 0 24z'></path>
          <path
            d='M18,2 L6,2 C4.9,2 4,2.9 4,4 L4,20 C4,21.1 4.9,22 6,22 L18,22 C19.1,22 20,21.1 20,20 L20,4 C20,2.9 19.1,2 18,2 Z M11,4 L11,9 L10,8.25 L9,9 L9,4 L11,4 Z M18,20 L6,20 L6,4 L7,4 L7,13 L10,10.75 L13,13 L13,4 L18,4 L18,20 Z M11.28,17.96 L9.5,15.81 L7,19 L17,19 L13.78,14.74 L11.28,17.96 Z'
            fill='#003E66'
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default PhotoAlbum

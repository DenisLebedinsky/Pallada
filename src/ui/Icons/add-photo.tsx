import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const AddPhoto = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 21 21' className={className}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-972.000000, -112.000000)'>
        <g transform='translate(970.000000, 111.000000)'>
          <path d='M0 0 24 0 24 24 0 24z' />
          <path
            d='M18,20 L4,20 L4,6 L13,6 L13,4 L4,4 C2.9,4 2,4.9 2,6 L2,20 C2,21.1 2.9,22 4,22 L18,22 C19.1,22 20,21.1 20,20 L20,11 L18,11 L18,20 Z M10.21,16.83 L8.25,14.47 L5.5,18 L16.5,18 L12.96,13.29 L10.21,16.83 Z M20,4 L20,1 L18,1 L18,4 L15,4 C15.01,4.01 15,6 15,6 L18,6 L18,8.99 C18.01,9 20,8.99 20,8.99 L20,6 L23,6 L23,4 L20,4 Z'
            fill='#003E66'
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default AddPhoto

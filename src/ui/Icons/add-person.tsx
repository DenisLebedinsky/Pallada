import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const AddPerson = ({
  width,
  height,
  className,
  fill = '#003e66',
  opacity = '1',
}: IconProps<{ opacity?: string; fill?: string }>): ReactElement => (
  <Icon
    opacity={opacity}
    className={className}
    width={width}
    height={height}
    fill={fill}
    viewBox='0 0 24 18'
  >
    <g stroke='none' fill='none'>
      <g transform='translate(-1149.000000, -368.000000)'>
        <g transform='translate(340.000000, 136.000000)'>
          <g transform='translate(608.000000, 220.000000)'>
            <g transform='translate(200.000000, 8.000000)'>
              <polygon points='0 0 24 0 24 24 0 24'></polygon>
              <path
                d='M15,12 C17.21,12 19,10.21 19,8 C19,5.79 17.21,4 15,4 C12.79,4 11,5.79 11,8 C11,10.21 12.79,12 15,12 Z M6,10 L6,7 L4,7 L4,10 L1,10 L1,12 L4,12 L4,15 L6,15 L6,12 L9,12 L9,10 L6,10 Z M15,14 C12.33,14 7,15.34 7,18 L7,20 L23,20 L23,18 C23,15.34 17.67,14 15,14 Z'
                id='Shape'
                fill={fill}
                fillRule='nonzero'
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </Icon>
)

export default AddPerson

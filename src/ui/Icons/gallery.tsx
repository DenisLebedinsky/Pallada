import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Gallery = ({
  width,
  height,
  className,
  fill = '#003E66',
}: IconProps<{ fill?: string }>): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 14 14'>
    <g fill='none' fillRule='evenodd'>
      <path d='M-1 15V-1h16v16z' />
      <path
        d='M12.333 1.667v8h-8v-8h8zm0-1.334h-8C3.6.333 3 .933 3 1.667v8C3 10.4 3.6 11 4.333 11h8c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zM6.667 6.78l1.126 1.507L9.447 6.22 11.667 9H5l1.667-2.22zM.333 3v9.333c0 .734.6 1.334 1.334 1.334H11v-1.334H1.667V3H.333z'
        fill={fill}
      />
    </g>
  </Icon>
)

export default Gallery

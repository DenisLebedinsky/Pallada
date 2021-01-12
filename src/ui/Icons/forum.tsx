import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Forum = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 68 68' className={className}>
    <g fill='none' fillRule='evenodd'>
      <path d='M-6-6h80v80H-6z' />
      <path
        d='M44 7.3333333v23.3333334H11.2333333l-3.9 3.9V7.3333333H44M47.3333333.66666667H4c-1.83333333 0-3.33333333 1.5-3.33333333 3.33333333v46.6666667L14 37.3333333h33.3333333c1.8333334 0 3.3333334-1.5 3.3333334-3.3333333V4c0-1.83333333-1.5-3.33333333-3.3333334-3.33333333zM64 14h-6.6666667v30H14v6.6666667C14 52.5 15.5 54 17.3333333 54H54l13.3333333 13.3333333v-50C67.3333333 15.5 65.8333333 14 64 14z'
        fill='#003E66'
        fillRule='nonzero'
      />
    </g>
  </Icon>
)

export default Forum

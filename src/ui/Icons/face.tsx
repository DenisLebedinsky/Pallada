import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Face = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 20 20' className={className}>
    <g fill='none' fillRule='evenodd'>
      <path
        d='M7 9.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25S7.69 9.75 7 9.75zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C9.07 6.33 12.05 8 15.42 8c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z'
        fill='#003E66'
        fillRule='nonzero'
      />
      <path d='M-2-2h24v24H-2z' />
    </g>
  </Icon>
)

export default Face

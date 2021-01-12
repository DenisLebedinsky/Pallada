import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Search = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 18 18' className={className}>
    <g fill='none' fillRule='evenodd'>
      <path
        d='M12.5 11h-.79l-.28-.27C12.41 9.59 13 8.11 13 6.5 13 2.91 10.09 0 6.5 0S0 2.91 0 6.5 2.91 13 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z'
        fill='#003E66'
        fillRule='nonzero'
      />
      <path d='M-3-3h24v24H-3z' />
    </g>
  </Icon>
)

export default Search

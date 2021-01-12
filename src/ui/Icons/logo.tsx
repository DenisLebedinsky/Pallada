import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Logo = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 37 38' className={className}>
    <g fill='none' fillRule='evenodd'>
      <g transform='translate(-9 -11)'>
        <circle cx='28' cy='28' r='28' />
        <path
          d='M23 49c-1.458-.518-4.975-2.763-5.523-5.071-.55-2.309.226-2.544-.337-4.465-.475-.77-1.522-1.924-3.14-3.464 1.256.496 2.185.743 2.787.743.712-.511.99-2.008 1.753-1.702.557.18.753.948.588 2.302.647-.74 1.144-.94 1.492-.6C19.595 39.29 16.787 43.79 23 49z'
          fill='#37a20a'
        />
        <path
          d='M15.907 34.322c-5.003-.846-7.288-3.615-6.855-8.308.432-4.692 2.33-9.697 5.693-15.014 2.92 2.93 4.936 5.916 6.047 8.957 5.738-7.494 14.14-9.98 25.208-7.458-1.4 10.527-4.643 17.932-9.73 22.215-4.813 3.714-11.451 2.488-13.11-.72-1.658-3.208 8.895-10.497 12.237-13.134-12.656 5.426-14.994 13.134-17.168 13.134-.909 0-2.55-.748-2.55-11.787-1.02 3.856-.944 7.895.228 12.115z'
          fill='#37a20a'
        />
      </g>
    </g>
  </Icon>
)

export default Logo

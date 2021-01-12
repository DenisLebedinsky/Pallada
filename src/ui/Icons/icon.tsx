/* eslint-disable react/jsx-props-no-spreading */
import { SVGProps, ReactElement } from 'react'

export type IconProps<P = {}> = P & {
  width?: number
  height?: number
  className?: string
  fill?: string
  color?: string
  id?: string
}

interface BaseIconProps extends SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  viewBox: string
  id?: string
}

const getSize = (viewBox: string, ratio: number, width?: number, height?: number): IconProps => {
  if (!width && !height) {
    const sizes = viewBox.split(' ')
    return {
      width: +sizes[2],
      height: +sizes[3],
    }
  }
  if (width && height) {
    return {
      width,
      height,
    }
  }
  return {
    ...(width && {
      width,
      height: width / ratio,
    }),
    ...(height && {
      width: height * ratio,
      height,
    }),
  }
}

const getRatio = (viewBox: string): number => {
  const sizes = viewBox.split(' ')
  return +sizes[2] / +sizes[3]
}

const Icon = ({
  width,
  height,
  fill = '#000000',
  children,
  viewBox,
  id,
  ...props
}: BaseIconProps): ReactElement => (
  <svg
    fill={fill}
    viewBox={viewBox}
    id={id}
    {...getSize(viewBox, getRatio(viewBox), width, height)}
    {...props}
  >
    {children}
  </svg>
)
export default Icon

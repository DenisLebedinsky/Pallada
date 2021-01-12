/* eslint-disable @typescript-eslint/interface-name-prefix */

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.png' {
  const content: string
  export = content
}

declare module '*.jpg' {
  const content: string
  export = content
}

declare interface ICollection<T = string | number> {
  [key: string]: T
}

// declare interface DropDownItem<T = string | number> {
//   value: T
//   label: string
//   icon?: () => ReactElement
// }

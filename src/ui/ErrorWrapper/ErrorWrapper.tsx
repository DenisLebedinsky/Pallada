import { cloneElement, ReactElement } from 'react'
import { ErrorMessage, NestDataObject } from 'react-hook-form'
import css from './ErrorWrapper.module.scss'

interface ErrorWrapperProps<E = never> {
  children: ReactElement
  errors: NestDataObject<E>
  className?: string
  errorMessageClassName?: string
  name?: string
}

const ErrorWrapper = <E extends unknown>({
  children,
  errors,
  className,
  name,
}: ErrorWrapperProps<E>): ReactElement => {
  const _name = name ? name : children.props.name

  return (
    <div className={className}>
      {cloneElement(children, { invalid: !!errors[_name] })}
      <ErrorMessage name={_name} errors={errors} as={<span className={css.message} />} />
    </div>
  )
}

export default ErrorWrapper

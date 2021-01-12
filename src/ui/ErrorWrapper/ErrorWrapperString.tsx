// eslint-disable-next-line import/default
import classNames from 'classnames'
import { ReactElement } from 'react'
import { ErrorMessage, NestDataObject } from 'react-hook-form'
import css from './ErrorWrapper.module.scss'

interface ErrorWrapperProps<E = never> {
  errors: NestDataObject<E>
  name: string
  errorMessageClassName?: string
}

const ErrorWrapperString = <E extends unknown>({
  name,
  errors,
  errorMessageClassName,
}: ErrorWrapperProps<E>): ReactElement => {
  const errorMessageClass = classNames({
    [css.message]: true,
    [css['errorMessageClassName']]: errorMessageClassName,
  })

  return <ErrorMessage name={name} errors={errors} as={<span className={errorMessageClass} />} />
}

export default ErrorWrapperString

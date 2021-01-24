import TextField from '@material-ui/core/TextField'
import React, { forwardRef } from 'react'
import { Controller } from 'react-hook-form'

const FormInput = forwardRef((props: any, ref: any) => {
  const { name, label, control } = props
  return (
    <Controller
      ref={ref}
      as={TextField}
      name={name}
      control={control}
      defaultValue=''
      label={label}
      fullWidth={true}
      {...props}
    />
  )
})

export default FormInput

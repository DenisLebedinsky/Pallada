import React from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { TagInputProps } from 'src/ui/Inputs/TagInput/types'
import css from './TagInput.module.scss'

const TagInput = ({
  label,
  options,
  value,
  onChange,
  isSearchable,
  id,
  optionMsg,
  creatable,
}: TagInputProps) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      minHeight: '46px',
      backgroundColor: 'transparent',
      borderColor: 'rgba(0, 61, 102, 0.4)',
      paddingTop: label ? '14px' : '0',
      ':hover': {
        borderColor: 'rgb(0, 62, 102)',
        boxShadow: 'none',
      },
      boxShadow: 'none',
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: 'rgb(222,229,236)',
      ':hover': {
        backgroundColor: 'rgb(110,197,62)',
        color: 'white',
      },
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '14px',
      borderRadius: '6px',
      color: 'rgb(0, 62, 102)',
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: 'rgb(0, 62, 102)',
      ':hover': {
        color: 'white',
      },
    }),
  }

  if (creatable) {
    return (
      <div className={css.tagInput}>
        <label>{label}</label>
        <CreatableSelect
          id={id}
          instanceId='postType'
          isMulti
          name='colors'
          options={options}
          value={value}
          onChange={onChange}
          styles={colourStyles}
          placeholder=''
          noOptionsMessage={() => 'Cписок пуст'}
          isSearchable={isSearchable}
          formatCreateLabel={(userInput) => `${userInput}`}
        />
      </div>
    )
  }

  return (
    <div className={css.tagInput}>
      <label>{label}</label>
      <Select
        id={id}
        instanceId='postType'
        isMulti
        name='colors'
        options={options}
        value={value}
        onChange={onChange}
        styles={colourStyles}
        placeholder=''
        noOptionsMessage={optionMsg}
        isSearchable={isSearchable}
        autoComplete='off'
      />
    </div>
  )
}

export default TagInput

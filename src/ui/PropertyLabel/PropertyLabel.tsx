import React from 'react'
import css from './PropertyLabel.module.scss'

interface PropertyLabelProps {
  name: string
  text: string
}

const PropertyLabel: React.FC<PropertyLabelProps> = ({ name, text }) => {
  return (
    <div className={css.propertyLabel}>
      <span className={css.name}>{name}</span>
      <span className={css.text}>{text}</span>
    </div>
  )
}

export default PropertyLabel

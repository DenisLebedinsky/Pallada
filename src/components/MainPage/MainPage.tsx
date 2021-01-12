import React from 'react'
import Buildings from 'src/components/Buildings'
import Filter from 'src/components/Filter/Filter'
import css from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={css.mainPage}>
      <div className={css.labelBlock}>
        <img src={require('public/logo.png')} alt='pallada' className={css.label} />
      </div>
      <img src={require('public/images/background.jpeg')} alt='Ейск' className={css.image} />
      <Filter />

      <Buildings />
    </div>
  )
}

export default MainPage

import { useEffect, useState } from 'react'
import css from './CookiePolicy.module.scss'

const CookiePolicy = () => {
  const [showCookiePolicy, setShowCookiePolicy] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('acceptCookiePolicy') !== 'accepted cookie policy') {
      setShowCookiePolicy(true)
    }
  }, [])

  const onAccept = () => {
    setShowCookiePolicy(false)
    localStorage.setItem('acceptCookiePolicy', 'accepted cookie policy')
  }

  if (!showCookiePolicy) return null

  return (
    <div className={css.cookiePolicy}>
      <div className={css.inner}>
        <p>
          {`Мы используем файлы cookie на этом сайте для улучшения работы.
          Нажимая кнопку "принять", вы соглашаетесь с этим.`}
        </p>
        <button onClick={onAccept} type='button'>
          Принять
        </button>
      </div>
    </div>
  )
}

export default CookiePolicy

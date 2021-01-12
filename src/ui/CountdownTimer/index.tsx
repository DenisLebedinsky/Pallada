import { ReactElement, useEffect, useState } from 'react'
import { random } from 'src/utils/random'
import css from './CountdownTimer.module.scss'

type TimeLeft = {
  days?: string
  hours?: string
  minutes?: string
  seconds?: string
}

export default function CountdownTimer({ time, text, onTimeOut }): ReactElement | null {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(time) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const translateInterval = (interval): string | undefined => {
    switch (interval) {
      case 'seconds':
        return 'секунд'
      case 'minutes':
        return 'минут'
      case 'hours':
        return 'часов'
      case 'days':
        return 'дней'
    }
  }

  const itervalArr = Object.keys(timeLeft).filter((interval) => timeLeft[interval] > 0)

  if (!itervalArr.length) {
    onTimeOut()
  }

  if (itervalArr.length) {
    return (
      <div className={css.timer}>
        <span className={css.result}>{text}</span>
        <span className={css.result}>Будет доступно через:</span>

        {itervalArr.map((interval) => (
          <span key={random()} className={css.time}>
            {timeLeft[interval]} {translateInterval(interval)}{' '}
          </span>
        ))}
      </div>
    )
  }

  return null
}

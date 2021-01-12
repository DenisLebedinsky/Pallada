// import { useSnackbar } from 'notistack'
import React, { useCallback } from 'react'

const NotificationAction = (key: string) => {
  // const { closeSnackbar } = useSnackbar()

  const handleClick = useCallback(() => {
    // closeSnackbar(key)
  }, [key])

  return <button onClick={handleClick}>Dismiss</button>
}

export default NotificationAction

import React, { createContext, useCallback, useEffect, useState } from 'react'
import SnackBar from './Snackbar'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const SnackBarContext = createContext()

const AUTO_DISMISS = 5000

export function SnackBarProvider({ children }) {
  const [alerts, setAlerts] = useState<any[]>([])

  const activeAlertIds = alerts.join(',')
  useEffect(() => {
    if (activeAlertIds.length > 0) {
      const timer = setTimeout(
        () => setAlerts((alerts: any[]) => alerts.slice(0, alerts.length - 1)),
        AUTO_DISMISS
      )
      return () => clearTimeout(timer)
    }
  }, [activeAlertIds])

  const addAlert = useCallback((content) => setAlerts((alerts: any) => [content, ...alerts]), [])

  const value = { addAlert }

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {alerts.map((alert) => (
        <SnackBar key={alert} alert={alert} />
      ))}
    </SnackBarContext.Provider>
  )
}

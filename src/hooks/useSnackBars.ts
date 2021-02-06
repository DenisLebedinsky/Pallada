import { useContext } from 'react'
import { SnackBarContext } from '../components/SnackProvider/SnackProvider'

export const useSnackBars = () => useContext(SnackBarContext)

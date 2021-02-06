import MUSnackBar from '@material-ui/core/Snackbar'
import React from 'react'

interface SnackbarProps {
  alert: string
}

const Snackbar = ({ alert }: SnackbarProps) => {
  const handleClose = () => {
    console.log('close')
  }

  return (
    <MUSnackBar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={true}
      autoHideDuration={6000}
      onClose={handleClose}
      message={alert}
      action={
        <React.Fragment>
          {/*<Button color='secondary' size='small' onClick={handleClose}>*/}
          {/*  UNDO*/}
          {/*</Button>*/}
          {/*<IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>*/}
          {/*  <CloseIcon fontSize='small' />*/}
          {/*</IconButton>*/}
        </React.Fragment>
      }
    />
  )
}

export default Snackbar

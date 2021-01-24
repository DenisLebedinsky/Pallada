import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import React from 'react'
import css from './ContactModal.module.scss'

interface ContactModalProps {
  open: boolean
  handleClose: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={css.contactModal}>
        <div className={css.header}>
          <h3></h3>
          <CloseIcon className={css.close} onClick={handleClose} />
        </div>

        <span className={css.title}>Вы можете позвонить нам</span>
        <div className={css.tel}>
          <a href='tel:+79094533166'>
            <Button variant='contained' className={css.button}>
              <PhoneIcon className={css.icon} />
              +7(909)-453-31-66
            </Button>
          </a>
          <span className={css.dep}>отдел продаж</span>
        </div>

        <div className={css.tel}>
          <a href='tel:+79182983448'>
            <Button variant='contained' className={css.button}>
              <PhoneIcon className={css.icon} />
              +7(918)-298-34-48
            </Button>
          </a>
          <span className={css.dep}>юридический отдел</span>
        </div>

        <span className={css.title}>Написать на электронную почту</span>
        <a href='mailto:pallada-eysk@yandex.ru'>
          <Button variant='contained' className={css.button}>
            <MailIcon className={css.icon} />
            pallada-eysk@yandex.ru
          </Button>
        </a>

        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href='https://yandex.ru/maps/-/CCUIjAxvgB' target='_blank' className={css.map}>
          <img src={require('public/images/map.png')} alt='map' className={css.mapImage} />
        </a>
      </div>
    </Modal>
  )
}

export default ContactModal

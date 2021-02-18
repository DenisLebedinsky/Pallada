import { Button, Chip } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import React, { useState } from 'react'
import Bar from 'src/components/Bar'
import ContactModal from 'src/components/Modals/ContactModal'
import css from './About.module.scss'

const About: React.FC = () => {
  const [contactModal, setContactModal] = useState(false)

  return (
    <div className={css.about}>
      <Bar main={false} />

      <div className={css.row}>
        <div className={css.logoBox}>
          <img src={require('public/images/logo2.png')} alt='pallada' className={css.logo} />
        </div>

        <div className={css.mainInfo}>
          <h1>Мы оказываем широкий спектр юридических услуг в сфере недвижимости</h1>

          <Chip style={{ margin: 5 }} label='Оформление документов' icon={<DoneIcon />} />
          <Chip label='Подбор недвижимости' icon={<DoneIcon />} style={{ margin: 5 }} />
          <Chip style={{ margin: 5 }} label='Помощь при продаже' icon={<DoneIcon />} />
          <Chip label='Консультации по кредиту' icon={<DoneIcon />} style={{ margin: 5 }} />
          <Chip label='Ипотека для приобретения жилья' icon={<DoneIcon />} style={{ margin: 5 }} />
          <Chip label='Освоение материнского капитала' icon={<DoneIcon />} style={{ margin: 5 }} />
          <Chip label='Освоение жилищного сертификата' icon={<DoneIcon />} style={{ margin: 5 }} />
        </div>
      </div>

      <div className={css.rowInfo}>
        <p>
          Сотрудники нашей компании на профессиональном уровне окажут квалифицированную помощь в
          выборе объекта недвижимости или в его продаже, в получении кредита на приобретение жилья,
          помогут разумно использовать ваши личные накопления, материнский капитал, жилищный
          сертификат, оформят и приведут в порядок документы на уже имеющуюся у вас недвижимость.
        </p>
      </div>

      <div className={css.rowBottom}>
        <h3 className={css.text}>
          Aгенство недвижимости «Паллада» – это надежность, гарантия и качество работы!
        </h3>

        <Button variant='contained' className={css.button} onClick={() => setContactModal(true)}>
          Связаться с нами
        </Button>
      </div>
      <ContactModal open={contactModal} handleClose={() => setContactModal(false)} />
    </div>
  )
}

export default About

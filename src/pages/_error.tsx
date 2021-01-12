import { ReactElement } from 'react'
import Layout from 'src/components/Layout'

interface ErrorProps {
  statusCode: number
}

const Error = ({ statusCode }: ErrorProps): ReactElement => (
  <Layout>
    <h2>Ошибка {statusCode}</h2>
  </Layout>
)

Error.getInitialProps = ({ res, err }): ErrorProps => {
  const statusCode = res ? res?.statusCode : err ? err?.statusCode : 404
  return { statusCode }
}

export default Error

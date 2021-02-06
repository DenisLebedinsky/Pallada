import { ReactElement } from 'react'
import Layout from 'src/components/Layout'
import PageNotFound from 'src/components/PageNotFound'

export default function Error404(): ReactElement {
  return (
    <Layout>
      <PageNotFound />
    </Layout>
  )
}

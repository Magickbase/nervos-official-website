import { GetStaticProps } from 'next'
import * as listPage from './list/[[...opts]].page'

export const getStaticProps: GetStaticProps = async ctx => {
  return listPage.getStaticProps({ ...ctx, params: { opts: ['all', '1'] } })
}

export default listPage.default

import { getRepositoryList } from '@/api/repository'

export const getRepoList = async (data) => {
  return await getRepositoryList(data).then((res) => {
    console.log('data===>: ', res?.data)
    const list = res.data.data?.list || []
    const total = res.data.data?.count || 0

    return { list, total }
  })
}

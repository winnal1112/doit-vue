import request from '@/utils/axiosRequest.js'

export function getTest () {
  return request({
    url: `/hello`,
    method: 'get'
  })
}

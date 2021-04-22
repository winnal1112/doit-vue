import request from '@/utils/axiosRequest.js'

export function getMemberList(data) {
  return request({
    url: '/member',
    method: 'get',
    params: data
  })
}
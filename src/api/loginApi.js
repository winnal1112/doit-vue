import request from '@/utils/axiosRequest.js'

export function userLogin(user) {
  return request({
    url: '/login',
    method: 'post',
    data: user
  })
}

export function getUserInfo(id) {
  return request({
    url: `/user/${id}`,
    method: 'get'
  })
}

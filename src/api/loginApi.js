import request from '@/utils/axiosRequest.js'

export function userLogin(user) {
  return request({
    url: '/user',
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

export function userLogout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

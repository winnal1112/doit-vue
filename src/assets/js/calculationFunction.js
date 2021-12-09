// 时间戳站日期格式yyyy-MM-dd
export function standardDateToDate(date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  return '' + year + '-' + month + '-' + day
}

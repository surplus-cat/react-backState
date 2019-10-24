/**
 * 金额格式化
 * @param {*} number
 * @param {*} places
 * @param {*} symbol
 */
export function formatMoney(number, places, symbol, thousand, decimal) {
  number = Number(number) || 0
  places = !isNaN(places = Math.abs(places)) ? places : 2
  symbol = symbol !== undefined ? symbol : '￥'
  thousand = thousand || ','
  decimal = decimal || '.'
  const negative = number < 0 ? '-' : ''
  const i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + ''
  let j
  j = (j = i.length) > 3 ? j % 3 : 0
  return symbol + negative +
    (j ? i.substr(0, j) + thousand : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) +
    (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : '')
}

export function throttle(fn, interval) {
  const self = fn // 保存需要被延迟执行的函数的引用
  let timer = null
  let firstTime = true // 是否第一次调用

  return function (...args) {
    const that = this
    if (firstTime) {
      self.apply(that, args)
      return (firstTime = false)
    }

    if (timer) {
      return false
    }

    timer = setTimeout(function () {
      clearTimeout(timer)
      timer = null
      self.apply(that, args)
    }, interval || 500)
  }
}

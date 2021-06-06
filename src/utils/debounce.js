const debounce = (fn, delay, immediate) => {
  let timeout

  return (...args) => {
    const bound = fn.bind(this, ...args)

    clearTimeout(timeout)
    if(immediate && !timeout) {
      bound()
    }

    const execute = immediate ? () => {timeout = null} : bound

    timeout = setTimeout(execute, delay)
  }
}

export default debounce
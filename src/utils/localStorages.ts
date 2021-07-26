type UnknowObject = {
  [key: string]: string
}

const setLocalStorage = (data: UnknowObject) => {
  /**
   * Set object data to localstorage
   * Ex:
   * setLocalStorage({ hello: 'tuan', hi: 'king alex'})
   */
  const arrayData: Array<[string, string]> = Object.entries(data)
  arrayData.forEach(item => {
    localStorage.setItem(item[0], item[1])
  })
}

const getLocalStorage = (data: Array<string> | string) => {
  /**
   * Data is array get separate list key-value in localstorage.
   * Data is string and equal to 'all' response will be all localstorage data
   * Ex:
   * getLocalStorage(['hello', 'hi']) ==> result = { hello: 'true', hi: 'herry' }
   * getLocalStorage('all') ===> result = { hello: 'true', hi: 'herry', name: 'tuan' }
   */
  let result: UnknowObject = {}
  if (typeof data !== 'string') {
    data.forEach(item => {
      const res: string = localStorage.getItem(item) || ''
      result[item] = res
    })
    return result
  } else {
    if (typeof data === 'string') {
      if (data === 'all') {
        return (result = window.localStorage)
      } else {
        const result = localStorage.getItem(data) || ''
        return result ? JSON.parse(result) : ''
      }
    }
  }
}

const clearLocalStorage = () => {
  /**
   * Clear all keys-values in localstorage
   */
  window.localStorage.clear()
}

const removeLocalStorage = (data: Array<string>) => {
  /**
   * Remove list of key in localstorage
   * Ex: removeLocalStorage(['hello', 'hi'])
   */
  data.forEach(item => {
    localStorage.removeItem(item)
  })
}

export {
  setLocalStorage,
  getLocalStorage,
  clearLocalStorage,
  removeLocalStorage
}

import * as Contants from './contants'
import * as format from './format'
import * as generals from './generals'
import * as localStorages from './localStorages'

const Utils = {
  Contants: Contants,
  Formats: {
    Date: format.formatDate,
    Number: format.formatNumber
  },
  Creator: {
    Classes: generals.generatorClasses
  },
  LocalStorage: {
    Set: localStorages.setLocalStorage,
    Get: localStorages.getLocalStorage,
    Clear: localStorages.clearLocalStorage,
    Remove: localStorages.removeLocalStorage
  }
}

export default Utils

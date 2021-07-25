import clssNname from 'classnames/bind'

type ClassesOptionsType = {
  defaultClass: string
}

const generatorClasses = (
  styles: CSSModuleClasses,
  classNames: string,
  options?: ClassesOptionsType
) => {
  const { defaultClass } = options || {}
  let cx = clssNname.bind(styles)
  let rootClass = defaultClass ? { [defaultClass]: styles[defaultClass] } : {}
  return cx({
    ...rootClass,
    [classNames]: classNames
  })
}

export { generatorClasses }

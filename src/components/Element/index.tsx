import React from 'react'

export type ElProps = {
  hidden?: boolean
  loading?: boolean
}

type ElementProps = {
  children?: React.ReactElement
  el_props?: ElProps
}

const Element: React.VoidFunctionComponent<ElementProps> = React.memo(
  ({ children, el_props }) => {
    const { hidden = false, loading = false } = el_props || {}
    if (hidden) return null
    if (!children) return <span>Error in create this component</span>
    return React.cloneElement(children, {})
  }
)
export default Element

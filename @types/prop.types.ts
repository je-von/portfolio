interface iconProps {
  icon: JSX.Element
  url: string
}

interface linkProps {
  text: JSX.Element
  url: string
}

export interface Data {
  [key: string]: any
}

export type { iconProps, linkProps }

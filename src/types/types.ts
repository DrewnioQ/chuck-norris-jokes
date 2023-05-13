export type DataAPI = {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  url: string
  value: string
}

export type CategoriesAPI = string[]

export type QuoteProps = {
  quote: string | undefined
}

export type ButtonProps = {
  text: string
  onClickFn: () => void
}

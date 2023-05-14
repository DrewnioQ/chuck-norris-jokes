export type DataAPI = {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  url: string
  value: string
}

export type CategoriesAPI = string[]

export type ImageProps = {
  src: string
  alt: string
  className: string
}

export type JokeProps = {
  joke?: string
}

export type ButtonProps = {
  text: string
  onClick: (event: React.MouseEvent) => void
}

export type SelectProps = {
  options: CategoriesAPI
  value?: string
  onChange: (value?: string) => void
}

export type TextInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

import { ImageProps } from "../../../types/types.ts"

export default function Image({ src, alt, className }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-36 rounded-md object-top ${className}`}
    />
  )
}

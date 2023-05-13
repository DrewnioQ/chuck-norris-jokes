import ChuckNorrisImg from "../../../assets/img/chuck-norris.jpg"

export default function Image() {
  return (
    <img
      src={ChuckNorrisImg}
      alt="Chuck Norris"
      className="h-40 w-full rounded-sm object-cover object-left-top"
    />
  )
}

export default function processJoke(
  jokeString: string,
  impersonatedPersonString: string
) {
  if (!jokeString || impersonatedPersonString === "Chuck Norris")
    return jokeString

  return jokeString.replace("Chuck Norris", impersonatedPersonString)
}

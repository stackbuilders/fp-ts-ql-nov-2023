import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as NEA from 'fp-ts/NonEmptyArray'

type OneOrMany<T> = { tag: "One", value: T } | { tag: "Many", value: NEA.NonEmptyArray<T> }

const one = <T>(x: T): OneOrMany<T> => ({ tag: "One", value: x })

const many = <T>(x: NEA.NonEmptyArray<T>): OneOrMany<T> =>
  ({ tag: "Many", value: x })

/* Build OneOrMany from a list
    fromList([]) // => O.none
    fromList([3]) // => O.some({ tag: "One", value: 3 })
    fromList([3, 4, 5]) // => O.some({ tag: "Many", value: [3, 4, 5] })

    tips:
      O.map((x) => x + 1)(O.some(1)) === O.some(2)
      NEA.fromArray([]) === O.none
      NEA.fromArray([1,2]) === O.some(NonEmptyArray[1, 2])
*/
export const fromList = <T>(x: T[]): O.Option<OneOrMany<T>> => {

  if (x.length === 0) {
    return "none"
  else if(x.length === 1) {
    return "some one"
  } else {
    return "some many"
  }
}

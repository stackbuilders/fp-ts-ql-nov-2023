import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as NEA from 'fp-ts/NonEmptyArray'
import { Eq } from 'fp-ts/Eq'

type OneOrMany<T> = { tag: "One", value: T } | { tag: "Many", value: NEA.NonEmptyArray<T> }

export const one = <T>(x: T): OneOrMany<T> => ({ tag: "One", value: x })
export const many = <T>(x: NEA.NonEmptyArray<T>): OneOrMany<T> => 
  ({ tag: "Many", value: x })

/* Build OneOrMany from a list
    fromList([]) // => O.none
    fromList([3]) // => O.some({ tag: "One", value: 3 })
    fromList([3, 4, 5]) // => O.some({ tag: "Many", value: [3, 4, 5] })
*/
export const fromList = <T>(x: T[]): O.Option<OneOrMany<T>> => {
  return pipe(
    x,
    NEA.fromArray,
    O.map(
      (y) => {
        if(y.length === 1) {
          return one(y[0])
        } else {
          return many(y)
        }
      })
  )
}

/* Checks equality of OneOrMany

    Tips:
      - Use NEA.getEq
*/
export const getEq = <T>(eqInner: Eq<T>): Eq<OneOrMany<T>> => ({
  equals: (x, y) => {
    return undefined as unknown as boolean
  },
})

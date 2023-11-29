import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as NEA from 'fp-ts/NonEmptyArray'
import { Eq } from 'fp-ts/Eq'
import * as TE from 'fp-ts/TaskEither'

import axios from 'axios';

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

/* Checks equality of OneOrMany */
export const getEq = <T>(eqInner: Eq<T>): Eq<OneOrMany<T>> => ({
  equals: (x, y) => {
    if(x.tag === "One" && y.tag === "One") {
      return eqInner.equals(x.value, y.value)
    } else if(x.tag === "Many" && y.tag === "Many") {
      return NEA.getEq(eqInner).equals(x.value, y.value)
    }
    return false
  },
})

/* Checks equality of OneOrMany */
export const map = <A, B>(f: (a: A) => B) => (a: OneOrMany<A>): OneOrMany<B> => {
  switch (a.tag) {
    case "One":
      return one(f(a.value))
    case "Many":
      return pipe(a.value, NEA.map(f), many)
  }
}

type Tramite = {
  tramite_id: string;
  nombre: string;
}

/* Request ecuadorian tramites */
const URL = "https://www.gob.ec/api/v1/tramites"
export const printTramitesEC = (): void => {
  console.log("TODO")
}

printTramitesEC();

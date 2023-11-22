import * as O from 'fp-ts/Option'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'

type OneOrMany<T> = "One" | "Many"

/** Smart constructor for single element

    one(3) // => { tag: "One", value: 3 }
    one("tres") // => { tag: "One", value: "tres" }

*/
export const one = <T>(x: T): OneOrMany<T> => "One"

/** Smart constructor for a list of elements

    many([]) // => O.none
    many([1,2,3]) // => { tag: "Many", value: [1,2,3] }

*/
export const many = <T>(x: T[]): O.Option<OneOrMany<T>> => O.some("Many")

/** Build OneOrMany from a list

    fromList([]) // => O.none
    fromList([3]) // => { tag: "One", value: 3 }
    fromList([3, 4, 5]) // => { tag: "Many", value: [3, 4, 5] }

*/
export const fromList = <T>(x: T[]): O.Option<OneOrMany<T>> => O.some("One")

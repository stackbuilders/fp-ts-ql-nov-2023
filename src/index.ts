import * as O from 'fp-ts/Option'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'

type OneOrMany<T> = "One" | "Many"

/** Smart constructor for single element

    one(3) // => { tag: "One", value: 3 }
    one("tres") // => { tag: "One", value: "tres" }

*/
export const one = <T>(x: T): OneOrMany<T> => "One"

export const many = <T>(x: RNEA.ReadonlyNonEmptyArray<T>): OneOrMany<T> => "Many"

export const fromList = <T>(x: T[]): O.Option<OneOrMany<T>> => O.some("One")

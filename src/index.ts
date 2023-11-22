import * as O from 'fp-ts/Option'

type OneOrMany<T> = "One" | "Many"

export const one = <T>(x: T): OneOrMany<T> => "One"
export const many = <T>(x: T): OneOrMany<T> => "Many"
export const fromList = <T>(x: T[]): O.Option<OneOrMany<T>> => O.some("One")

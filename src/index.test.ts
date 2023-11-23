import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/Array'

import { fromList } from '.';

describe("fromList", () => {
  describe("given empty list", () => {
    it("returns O.none", () => {
      const result = fromList([])
      expect(result).toEqual(O.none);
    })
  })

  describe("given a list with a single elemnt", () => {
    it("returns O.some(One(...))", () => {
      const result = fromList([1])
      expect(
        result._tag === "Some"
        && result.value.tag === "One"
        && result.value.value === 1
      ).toBeTruthy();
    })
  })

  describe("given a list with a multiple items", () => {
    it("returns O.some(Many(...))", () => {
      const result = fromList([1, 2, 3])
      expect(
        result._tag === "Some"
        && result.value.tag === "Many"
        && A.size(result.value.value) === 3
      ).toBeTruthy()
    })
  })
})

import { assertEquals, assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("hello world", () => {
  const x = 2 + 1;
  assertEquals(x, 3);
});

const sum = (a: number, b: number) => a + b

Deno.test({
  name: 'sum() returns sum of numbers',
  fn() {
    const actual = sum(1, 2);
    const expected = 3;
    assertStrictEquals(actual, expected);
  }
});

const someAsyncFunc = () => {
  return new Promise(resolve => {
    resolve({ msg: 'hello' })
  })
}

Deno.test({
  name: '#someAsyncFunc returns msg',
  async fn() {
    const actual = await someAsyncFunc();
    const expected = { msg: 'hello' };
    assertEquals(actual, expected);
  }
});

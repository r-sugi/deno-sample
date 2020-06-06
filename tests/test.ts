import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("hello world", () => {
  const x = 2 + 1;
  assertEquals(x, 3);
});

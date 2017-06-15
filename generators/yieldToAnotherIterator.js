function *someGenerator() {
  yield 0;
  yield* [1,2,3];
}

for (v of someGenerator()) {
  console.log(v);
}

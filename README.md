# TypeScript Runtime Error Despite Type Safety

This example demonstrates a common pitfall in TypeScript: while TypeScript's type system prevents many compile-time errors, it doesn't guarantee the absence of runtime errors.  The provided code compiles without issue but produces `NaN` at runtime due to type coercion.

The `add` function is correctly typed, but the call to it with a string and a number bypasses the type system's error checking at compile time, leading to an unexpected result at runtime.
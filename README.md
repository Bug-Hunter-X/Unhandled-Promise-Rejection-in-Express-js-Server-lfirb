## Unhandled Promise Rejection in Express.js Server

This repository demonstrates a common error in Express.js applications: neglecting to handle promise rejections in asynchronous middleware or route handlers.  When an asynchronous operation within a request handler fails, the error is silently swallowed if not explicitly caught.

The `bug.js` file showcases the problematic code. The `doSomethingAsync()` function simulates an asynchronous operation that might randomly fail.  If it fails, the error is not caught, leading to an unhandled rejection. This can result in the application behaving unexpectedly or even crashing without any clear indication of the problem.

The `bugSolution.js` file provides a corrected version with proper error handling using a `try...catch` block or `.catch()` method on the promise.
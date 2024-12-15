const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  doSomethingAsync().then(() => {
    res.send('OK');
  }).catch(err => {
    // Error handling missing! 
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.5;
      if (shouldFail) {
        reject(new Error('Something went wrong'));
      } else {
        resolve();
      }
    }, 1000);
  });
}
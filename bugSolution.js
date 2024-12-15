const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync().then(() => {
    res.send('OK');
  }).catch(err => {
    console.error('Error during request:', err);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function doSomethingAsync() {
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
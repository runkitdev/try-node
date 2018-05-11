// Node 10 has native support for async iterators!

const got = require("got");
async function* asyncRandomNumbers() {
  // This is a web service that returns a random number
  const url = 'https://www.random.org/decimal-fractions/?num=1&dec=10&col=1&format=plain&rnd=new';

  while (true) {
    const { body } = await got(url);
    yield Number(body);
  }
}

async function example() {
  for await (const number of asyncRandomNumbers()) {
    console.log(number);
    if (number > 0.95) break;
  }
}

example();

// based on example from https://jakearchibald.com/2017/async-iterators-and-generators/

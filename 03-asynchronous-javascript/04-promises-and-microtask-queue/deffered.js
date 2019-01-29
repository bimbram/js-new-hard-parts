function display(data) {
  console.log(data);
}

function printHello() {
  console.log('hello');
}

function blockFor300ms() {
  // blocks js thread for 300 ms
}

setTimeout(printHello, 0);

const futureData = fetch('http://twitter.com/will/tweets/1');

futureData.then(display)
blockFor300ms();

console.log("me first");

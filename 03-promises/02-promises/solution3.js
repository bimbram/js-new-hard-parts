function display(data) {
  console.log(data);
}

const futureData = fetch('http://twitter.com/will/tweets/1');

futureData.then(display); // Attaches display functionality

console.log("Me first!");

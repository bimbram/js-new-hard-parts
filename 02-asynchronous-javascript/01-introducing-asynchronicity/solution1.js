function display(data) {
  console.log(data);
}

const dataFromAPI = fetchAndWait('http://twitter.com/will/tweets/1')

// user can do nothing here
// could be 30 ms could be half a second
// they're just clicking and getting nothing

display(dataFromAPI)

console.log("Me later!");

function *oneHundred(){
  let counter = 0;
  while (true){
    yield counter;
    counter += 1;
    if (counter > 100) {
      counter = 0;
    }
  }
}

for (let counter of oneHundred()){
  console.log(counter);
}

function foo(){
  console.log('hello');
  setTimeout(() => {
    console.log('bingo');
  }, 1000);
}

foo();

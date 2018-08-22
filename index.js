// Code your solution here!

function printString(string) {
  if (!!string.length) {
    console.log(string[0]);
    
    printString(string.substring(1, string))
  } else {
    return
  }
}


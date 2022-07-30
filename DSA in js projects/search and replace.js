function myReplace(str, before, after) {

  let newAfter = "";
  if(before[0].toUpperCase() == before[0]){
    newAfter = after.replace(after[0], after[0].toUpperCase());
  }
  else if
  (before[0].toLowerCase() == before[0]){
    newAfter= after.replace(after[0], after[0].toLowerCase());
  }

  let newStr= str.replace(before ,newAfter);
  return(newStr)
  // console.log(newAfter)
}

myReplace("Let us get back to more Coding", "Coding", "algorithms")
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
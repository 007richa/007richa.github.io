function spinalCase(str) {
  let newStr = str.match(/[a-z]+|[A-Z][a-z]+/g)

  let result = newStr
  .join(" ")
  .split(/\W|_/)
  .join("-")
  .toLowerCase()
  
  return result
// console.log(result)
}

spinalCase('This Is Spinal Tap');
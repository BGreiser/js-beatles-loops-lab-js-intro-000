// add solution here
function theBeatlesPlay(musicians, instruments) {
  let x = [];
  for (let i = 0; i <= musicians.length; i++){
    x.push(`${musicians[i]} plays ${instuments[i]}`);
  }
  return x;
}

var inputs = process.argv.slice(2);
var result = inputs.map( (val) => val[0] )
  .reduce( (prev, cur) => prev + cur );
console.log(result);
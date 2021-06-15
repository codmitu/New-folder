const array = ["one", null, "three", undefined, "", "six"];
console.log(array)
// Outputs [ 'one', null, 'three', undefined, '', 'six' ]

const newArray = array.filter(Boolean);
console.log(newArray)
// Outputs [ 'one', 'three', 'six' ]

// this is a playground for the SETS

const mySet = new Set();

mySet.add(1);
mySet.add(1);

mySet.add(2);

mySet.add("this is a new entry in set");

mySet.add({object:{key : "value"}});

for(items of mySet)
console.log(items);
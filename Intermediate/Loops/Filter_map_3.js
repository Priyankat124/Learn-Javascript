/* const Mynums = [1,2,3,4]
const Totaling = Mynums.reduce(function (acc , currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
},0)
console.log(Totaling); */
const Mynums = [1,2,3,4]
const myTotal = Mynums.reduce((acc,currval)=>{
console.log(`acc is ${acc} and curvval is ${currval}`);
return acc+currval
},5)
console.log(myTotal);

const courses = [
    {itemName: "data science",
price : 12999},
    {itemname : "py",
price : 999},
{
    itemname : "javascript",
    price : 3999
}
]
const PriceToPay = courses.reduce((acc ,item)=>
{
    return acc+ item.price
},0)
console.log(PriceToPay);
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});
class Counter {
    constructor() {
      this.sum = 5;
      this.count = 70;
    }
    add(array) {
      // Only function expressions have their own this bindings.
      array.forEach(function countEntry(entry) {
        this.sum += entry;
        ++this.count;
      }, this);
    }
  }
  
  const obj = new Counter();
  obj.add([2, 5, 9]);
  console.log(obj.count); // 3
  console.log(obj.sum); // 16
  


const arr1 = [1,2,3,4,5];
arr1.map((x)=> [x*2]);
console.log(arr1);

const arrayLike = {
    length: 3,
    0: 1,
    1: 2,
    2: 3,
    3: 4, // ignored by flatMap() since length is 3
  };
  console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
  // [1, 2, 2, 4, 3, 6]
  
  // Array-like objects returned from the callback won't be flattened
  console.log(
    Array.prototype.flatMap.call(arrayLike, (x) => ({
      length: 1,
      0: x,
    })),
  );
  // [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
  
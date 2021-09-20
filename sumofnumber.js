const aList = [1, 2, 4, 5];

function sumFor(someList) {
  let count = 0;
  for (const num of someList) {
    count += num;
  }
  return count;
}

function sumWhile(someList) {
  let x = 0;
  let count = 0;
  while (x < someList.length) {
    count += someList[x];
    x++;
  }
  return count;
}

function sumRecursion(someList) {
  if (someList.length === 0) {
    return 0;
  }
  return someList[0] + sumRecursion(someList.slice(1, someList.length));
}

function sumTheSimpleWay(someList) {
  return _.reduce(someList, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(aList));
console.log(sumWhile(aList));
console.log(sumRecursion(aList));
console.log(sumTheSimpleWay(aList));
console.log('cool');

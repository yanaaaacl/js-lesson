function arrayToList(array){
  let list = null;
  for (let i = array.length - 1; i >= 0; i--){
    list = {value: array[i], rest: list};
  }
  return list;
}
console.log(arrayToList([1, 2, 3]));

function listToArray(list){
  let array = [];
  for (let node = list; node; node = node.rest){
    array.push(node.value);
  }
  return array;
}
console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(value, list){
  return {value, rest: list};
}
console.log(prepend(10, prepend(20, null)));

function nth(list, n){
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([1, 2, 3]), 1));


let obj = {here: {is: "an"}, object: 2};
function deepEquel(a, b){
  if (a === b) return true;
  if (a == null || typeof a != "object" ||
  b == null || typeof b != "object") return false;
  let keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length != keysB.length) return false;
  for (let key of keysA){
    if (!keysB.includes(key) || !deepEquel(a[key], b[key])) return false;
  }
  return true;

}
console.log(deepEquel(obj, obj));
console.log(deepEquel(obj, {here: 1, object: 2}));
console.log(deepEquel(obj, {here: {is: "an"}, object: 2}));
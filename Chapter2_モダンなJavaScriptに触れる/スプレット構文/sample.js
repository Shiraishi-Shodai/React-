const arr = [1, 2];
console.log(arr);
console.log(...arr);

const summaryFunc = (val1, val2) => console.log(val1 + val2);
// 普通に添え字を指定
summaryFunc(arr[0], arr[1]);
summaryFunc(...arr);

// 分割代入時に要素をまとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(...arr3);

// 要素のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr4);
console.log(arr6);
console.log(typeof arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const obj1 = {
  val1: 10,
  val2: 20,
};

const obj2 = {
  val1: 30,
  val2: 40,
};

const obj10 = {
  val1: 50,
  val2: 60,
};

const obj3 = { ...obj1 };
console.log(obj3);
const obj4 = [obj1, obj2, obj10];
// console.log("ここ");
// console.log(obj4);

const result = obj4.map((obj) => {
  console.log("ここ");
  console.log({...obj, val2: 900});

  if (obj.val1 === 30) {
    return {
      ...obj,
      val1: 100,
    };
  }

  return obj;
});

console.log(result);

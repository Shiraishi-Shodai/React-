// 復習

// 配列のデータをコピー
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2[0] = 100;
console.log(arr1);
console.log(arr2);

// 配列の合体
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = [...arr3, ...arr4];
console.log(`arr5: ${arr5}`);

// 文字列を分解
const str1 = 'tanaka';
const arr6 = [...str1];
console.log(`arr6: ${arr6}`);

// オブジェクトのコピー
const obj1 = {
    id: '001',
    name: 'AAA',
    age: 20
};

const obj2 = {...obj1};
console.log(`obj1: ${obj1}`);
console.log(`obj2: ${obj2}`);

// オブジェクトの合体(同じプロパティを持つ場合は上書きされる)
const obj3 = {
    id: '001',
    name: 'AAA',
};

const obj4 = {
    id: '002',
    age: 20
};

const obj5 = {...obj3, ...obj4};
console.log('obj5: ', obj5);

// 分割代入
const obj6 = {
    id: '001',
    name: 'AAA',
    age: 20
};

const {id, ...other} = obj6;
console.log('id: ', id);
console.log('other : ', other);

const arr = [1, 2, 3, 4, 5];
const [num1, num2, ...other2] = arr;
console.log('num1 : ', num1);
console.log('num2 : ', num2);
console.log('ohter2 : ', other2);

// 関数の引数の数がn個の時に使える
function test(...num) {
    console.log(num); //numは配列
};

test(1, 2, 3);
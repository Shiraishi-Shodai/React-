// 分割代入(オブジェクトや配列から値を取得する方法)

// 従来のオブジェクトからの値取得
const myProfile_obj = {
    name: "主田",
    age: 24
};
console.log(`私の名前は${myProfile_obj.name}です。年齢は${myProfile_obj.age}歳です。`);

// オブジェクトの分割代入
// const {name, age} = myProfile_obj;
// console.log(`私の名前は${name}です。年齢は${age}歳です。`);
// const {age, name} = myProfile_obj; //順不同
// console.log(`私の名前は${name}です。年齢は${age}歳です。`);

// 従来の配列からの値取得
const myProfile_arr = ["主田", 24];
console.log(`私の名前は${myProfile_arr[0]}です。年齢は${myProfile_arr[1]}歳です。`);

// 配列の分割代入
// const [name, age] = myProfile_arr;
// console.log(`私の名前は${name}です。年齢は${age}歳です。`);
const [age, name] = myProfile_arr; //順番の入れ替えは不可能
console.log(`私の名前は${name}です。年齢は${age}歳です。`);
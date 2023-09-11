//varでの宣言(上書き、再利用が可能)
// var val1 = "var変数"
// console.log(val1)
// // 上書き(上書きしてほしくないときもあるので無条件に上書きされると不便)
// val1 = "var変数を上書き"
// console.log(val1)
// // 再利用(どちらの変数を使用するのかわかりにくい)
// var val1 = "varを再利用"
// console.log(val1)

// // letでの宣言(上書きは可能、再利用は不可能)
// let val2 = "letを宣言"
// console.log(val2)
// // 上書き
// val2 = "letを上書き"
// console.log(val2)
// // 再利用
// let val2 = "letを宣言"
// console.log(val2)

// // constでの宣言(上書、再利用が共に不可能)
// const val3 = "constを宣言"
// console.log(val3)
// // 上書き
// val3 = "constを上書き"
// console.log(val3)
// // // 再利用
// const val3 = "constを宣言"
// console.log(val3)


// // constで定義した変数を変更できる例
// const obj1 = {
//     name: "山田",
//     age: 24
// };
// console.log(obj1);

// obj1.name = "Nushida";
// console.log(obj1);
// obj1.address = "Tokyo";
// console.log(obj1);
// console.table(obj1);

// const arr1 = ["dog", "cat"];
// console.log(arr1);
// arr1[0] = "wanko";
// console.log(arr1);
// arr1[2] = "flog";
// console.log(arr1);
// console.table(arr1);

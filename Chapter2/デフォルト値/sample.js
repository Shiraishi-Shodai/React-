// 関数のデフォルト値
const sayHello = (name = "主田") => console.log(`こんにちは${name}さん`)
sayHello("白石");

// オブジェクト分割代入のデフォルト値
const myProfile = {
    name: "主田",
    age: 24,
    sex: "woman"
};
const {name, sex = "man"} = myProfile;
console.log(name);
console.log(sex);

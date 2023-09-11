// プラス演算子を使ったテンプレート文字列
const name = "主田";
const age = 24;
const message = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message);

// ドルを使ったテンプレート文字列
const name2 = "主田";
const age2 = 24;
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

// 関数や計算式も使用可能
function sayHello() {
    return "こんにちは";
};

const date = new Date();

const message3 = `皆さん${sayHello}。今日から${date.getMonth() + 1}月です`;
console.log(message3);

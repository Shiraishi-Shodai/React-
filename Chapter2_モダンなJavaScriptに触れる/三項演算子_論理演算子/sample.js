// 三項演算子
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

// 数字の時は３桁ごとにカンマを指定
const addComma = (val) => {
    const result = typeof val === "number" ? val.toLocaleString() : val;
    return result;
}

console.log(addComma(1300));
console.log(addComma("1300"));

// 論理演算子
// ||
const num = null;
const fee = num || "金額未設定です";
console.log(fee); /* ||は左がtrueなら左を返し、左がfalseなら右を返す。 */

// null, undefined, 0などはfalseとして扱われる
const t = true;
const f = false;
const result = undefined || 0;
console.log(typeof result);

// &&
const a = true && "falseです";
console.log(a); /*&&は左がtrueの時、右を返し、左がfalseの時は左を返す */

// nullish
const nullish = undefined ?? "nullishです";
console.log(nullish);
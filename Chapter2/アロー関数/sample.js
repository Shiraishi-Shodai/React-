// 従来の関数
function normal_func1(value) {
    return value;
};
console.log(normal_func1("normal_func1です"));

const normal_func2 = function(value) {
    return value;
};
console.log(normal_func2("normal_func2です"));

// アロー関数
const allow_func1 = (value) => {
    return value;
};
console.log(allow_func1("allow_func1です"));

// 引数が１つの時はカッコを省略可能
const allow_func2 = value => {
    return value;
};
console.log(allow_func2("allow_func2です"));

// 処理が一行の時は波カッコとreturnを省略出来る
const allow_func3 = (value) => value;
console.log(allow_func3("allow_func3です"));

// 返却地が複数行に及ぶときでも単一行のように扱う
const allow_func4 = (val1, val2) => (
    {
        one: val1,
        two: val2
    }
);
console.log(allow_func4("一つ目", "二つ目"));
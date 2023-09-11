// map
const nameArr = ["主田", "崎岡", "後藤"];
for(let i = 0; i < nameArr.length; i++) {
    console.log(nameArr[i]);
}

const nameArr2 = nameArr.map((name) => {
   return  `${name}さん`
});
console.log(nameArr2);

// filter
const nameArr3 = nameArr.filter((name) => {
    return name === "後藤";
});
console.log(nameArr3);

// index
nameArr.map((name, index) => {
    console.log(`${index + 1}番目:${name}さん`);
});

const nameArr5 = nameArr.map((name) => {
    if(name === "主田") {
        return name;
    }
    return name + "さん";
});

console.log(nameArr5);
